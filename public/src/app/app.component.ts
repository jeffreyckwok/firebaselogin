import { NgModule, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: any;
  // userdb: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  constructor() {}
}
