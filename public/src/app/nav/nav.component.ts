import { NgModule, Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase/app';
import { LoginService } from '.././login.service';
import { Router } from '@angular/router';
import { HomeService } from '.././home/home.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isLoggedIn: boolean;
  user: any;
  // userdb: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  constructor(private _router: Router, private _homeService: HomeService, public loginService: LoginService, public af: AngularFireAuth) {
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.user = auth;
      }
    });

  }

  ngOnInit() {
    // this.getCurrentUser();
  }

  logout() {
     this.af.auth.signOut();
     this.user = null;
     this._router.navigate(['home']);
  }

  // getCurrentUser() {
  //   this._homeService.getCurrent()
  //   .then( (user) => this.user = user)
  //   .catch( (err) => this._router.navigate(['home']))
  // }

  // logout() {
  //   this.loginService.logout();
  // }

}
