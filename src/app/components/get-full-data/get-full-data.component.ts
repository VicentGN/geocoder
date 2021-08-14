import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetFullDataService } from '../../services/get-full-data.service';
import { Subscription } from 'rxjs';
import { CoordinatesToMapService } from '../../services/coordinates-to-map.service';

interface ObjectResponse {
  display_name: string,
  lat: string,
  lon: string
}

@Component({
  selector: 'app-get-full-data',
  templateUrl: './get-full-data.component.html',
  styleUrls: ['./get-full-data.component.css']
})
export class GetFullDataComponent implements OnInit, OnDestroy {

  location: string = "";
  resultLocation: Array<ObjectResponse> = [];
  subscription: Subscription = new Subscription();
  coordinatesSubscription: Subscription = new Subscription();


  constructor(
    private getFullDataService: GetFullDataService, 
    private coordinateService: CoordinatesToMapService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  blockRequest() {
    return this.location == '' || this.resultLocation.length > 0 ? true : false;
  }

  sendLocation() {
    !this.blockRequest() ? 
      this.subscription = this.getFullDataService.get(this.location).subscribe(data => {
        if(data.length > 0) {
          data.forEach((location: ObjectResponse) => {
            this.fillWithResults(location);
          })
        } else {
          alert("No se ha encontrado localización");
        }
      }) : false;
  } 

  fillWithResults(location: ObjectResponse) {
    this.resultLocation.push(location)
  }

  clearResults() {
    this.coordinateService.removeMarker(true);
    this.resultLocation = [];
    this.location = "";
  }

  selectCoordinates(coordinates:Array<string>) {
    this.coordinateService.changeCoordinates(coordinates);  
  }



}
