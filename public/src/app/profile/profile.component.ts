import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '.././home/home.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  favorites: Array<any> = [];
  user: any;
  // place: any = {};
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  constructor(private _profileService: ProfileService, private _route: ActivatedRoute, private _router: Router, private _homeService: HomeService, public af: AngularFireAuth) {
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.user = auth;
      }
    });
   }
   ngOnInit() {
    //  this.getCurrentUser();
     this.getAllPlaces();
   }


  //  getCurrentUser() {
  //    this._homeService.getCurrent()
  //    .then( (user) => this.user = user)
  //    .catch( (err) => this._router.navigate(['home']))
  //  }

   ngOnDestroy(){

   }


   getAllPlaces() {
     this._profileService.getAllPlaces()
     .then( (result) => {
       for(var i =0; i<result.length; i++) {
         this._profileService.findPlaceDetails(result[i].savedId)
         .then((data)=>{console.log(data);this.favorites.push(data);})
         .catch((err)=>{console.log(err);});
       }
     })
   }

}
