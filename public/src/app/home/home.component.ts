import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private _homeService: HomeService,
  private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this._homeService.getCurrent()
      .then( (user) => this.user = user)
      .catch( (err) => this._router.navigate(['home']))
  }

  // user() {
  //   if (localStorage.getItem('userData')) {
  //     this.userData = JSON.parse(localStorage.getItem('userData'));
  //   }
  //   else {
  //     console.log("No Data");
  //   }
  // }

}
