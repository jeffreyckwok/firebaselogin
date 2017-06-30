import { Component, OnInit } from '@angular/core';
import { ParksService } from './parks.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  constructor(private _parksService: ParksService) { }
  place: string = '';
  places: any;
  photos: any;

  ngOnInit() {
  }

  findPlace(){
    console.log(this.place);
    this._parksService.findPlace(this.place)
    .then((data)=>{
      console.log(data);
      this.places=data;
      this._parksService.findPhoto(this.places.results[0].photos[0].photo_reference)
      .then((data)=>{this.photos=data;})
      .catch((error)=>{console.log(error);});
    })
    .catch((error)=>{console.log(error);})
  }

}
