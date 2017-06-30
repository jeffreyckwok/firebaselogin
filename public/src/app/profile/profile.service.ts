import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProfileService {

  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  constructor(private _http: Http) { }

  findPlaceDetails(placeid){
    return this._http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeid+this.API_KEY, placeid)
    .map((response)=> {
      return response.json();
    })
    .toPromise();
  }

  getAllPlaces() {
    return this._http.get('/api/profile').map(response=>response.json()).toPromise();
  }


}
