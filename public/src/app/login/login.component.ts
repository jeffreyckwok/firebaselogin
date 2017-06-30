import { NgModule, Component, OnInit } from '@angular/core';
import { LoginService } from '.././login.service';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import { environment } from '../../environments/environment';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean;
  // user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  constructor(public loginService: LoginService, private router: Router, public af: AngularFireAuth) { }

  ngOnInit() {
  }

  login(formData) {
    this.loginService.login(formData.value)
    .then( (user) => {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    })
    .catch( (err) => console.log(err))

  }

  loginGoogle() {
    this.loginService.loginGoogle().then((data) => {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    })
    .catch();
  }
  loginFacebook() {
    this.loginService.loginFacebook().then((data) => {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    })
    .catch();
  }
  loginTwitter() {
    this.loginService.loginTwitter().then((data) => {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    })
    .catch();
  }
  loginGithub() {
    this.loginService.loginGithub().then((data) => {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    })
    .catch();
  }

  //
  // Send(desc: string) {
  //   this.items.push({ message: desc});
  //   this.msgVal = '';
  // }

}
