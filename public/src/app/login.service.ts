import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { environment } from '.././environments/environment';
import * as firebase from 'firebase/app';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()

export class LoginService {
  // public isLoggedIn: boolean;
  // user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  constructor(private _http: Http, public afAuth: AngularFireAuth) { }

  loginGoogle() {
    // this.isLoggedIn = true;
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginFacebook() {
    // this.isLoggedIn = true;
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  loginTwitter() {
    // this.isLoggedIn = true;
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());

  }
  loginGithub() {
    // this.isLoggedIn = true;
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());

  }

  // logout() {
  //   // this.isLoggedIn = false;
  //   // return this.afAuth.auth.signOut();
  // }

  login(user) {
    return this._http.post('/api/login', user).map( (response: Response)=> response.json()).toPromise();
  }



}
