import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFullDataService {

  constructor(private httpClient: HttpClient) { }


  // Returns all data from a defined location
  get(location: string): Observable<any> {
    return this.httpClient.get(`${environment.url}q=${location}&format=${environment.format}`)
  }

}
