import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any;
  place: any = {};
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  constructor(private router: Router, private _detailsService: DetailsService, private _route: ActivatedRoute, public af: AngularFireAuth) {
    this._route.params.subscribe((param)=>{
      this._detailsService.findPlaceDetails(param.id)
      .then((data)=>{console.log(data);this.place = data.result; console.log(this.place);})
      .catch((err)=>{console.log(err);});
    });
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.user = auth;
      }
    });
  }

  onSavePlace(place_id) {
    console.log("in the data:", place_id)
    this._detailsService.savedPlace(place_id)
    .then( (place_id) => {
      console.log(place_id)
      this.router.navigate(['profile']);
    })
    .catch( err => console.log(err))

  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }
}
