import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesToMapService {

  private coordinatesSource = new Subject<Array<string>>();
  private removeMarkerSource = new Subject<boolean>();

  currentCoordinates = this.coordinatesSource.asObservable();
  currentRemoveMarker = this.removeMarkerSource.asObservable();

  constructor() { }

  changeCoordinates(coordinates: Array<string>) {
    this.coordinatesSource.next(coordinates);
  }

  removeMarker(action: boolean) {
    this.removeMarkerSource.next(action);
  }

}
