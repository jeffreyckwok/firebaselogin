import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class DetailsService {
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  constructor(private _http: Http) { }

  findPlaceDetails(placeid){
  return this._http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeid+this.API_KEY, placeid)
  .map((response)=> {
    return response.json();
  })
  .toPromise();
  }

  savedPlace(placeid) {
    var savedInfo = {
      savedId: placeid
    }
    return this._http.post('/api/place', savedInfo).map(response=>response.json()).toPromise();
  }


}
