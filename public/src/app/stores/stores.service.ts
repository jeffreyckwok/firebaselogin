import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class StoresService {
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';
  options: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Access-Control-Allow-Origin': 'http://localhost:6789/',
      'Access-Control-Allow-Methods': 'GET, POST,, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  })

  constructor(private _http: Http) { }

  findPlace(place){
    return this._http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=pet+stores+'+place+this.API_KEY, place)
    .map((response)=> {
      return response.json();
    })
    .toPromise();
  }

  findPhoto(photoRef){
    return this._http.get('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+photoRef+this.API_KEY, this.options)
    .map((response)=> {
      return response.json();
    })
    .toPromise();
  }

}
