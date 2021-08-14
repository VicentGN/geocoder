import { AfterViewInit, Component, OnDestroy, OnInit, Input, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoordinatesToMapService } from '../../services/coordinates-to-map.service';
import * as L from 'leaflet';

// Defining general icon
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  private map: any;
  coordinatesSubscription: Subscription = new Subscription();
  private coordinates: Array<string> = [];
  removeMarkerSubscription: Subscription = new Subscription();
  private removeFlag: boolean = false;

  private marker: any = null;

  constructor(
    private coordinatesService: CoordinatesToMapService
  ) { }

  ngOnInit(): void {
    this.initMap();
    this.coordinatesSubscription = this.coordinatesService.currentCoordinates.subscribe(coordinates => {
      this.coordinates = coordinates;
      if (this.marker != null) {
        this.map.removeLayer(this.marker);
      }
      this.setMarker();
    });
    this.removeMarkerSubscription = this.coordinatesService.currentRemoveMarker.subscribe(action => {
      this.removeFlag = action;
      if (this.removeFlag) {
        this.map.removeLayer(this.marker);
      }
    });
  }

  ngOnDestroy(): void {
    this.coordinatesSubscription.unsubscribe();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39, -1 ],
      zoom: 6
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })

    this.map.addLayer(tiles); 

  }

  setMarker() {
    this.marker = new L.Marker([Number(this.coordinates[0]),Number(this.coordinates[1])]);
    this.marker.setIcon(iconDefault);
    this.marker.addTo(this.map);
  }

}
