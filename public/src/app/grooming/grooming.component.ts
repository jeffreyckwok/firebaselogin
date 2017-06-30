import { Component, OnInit } from '@angular/core';
import { GroomingService } from './grooming.service';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {

  constructor(private _groomingService: GroomingService) { }
  
  place: string = '';
  places: any;
  photos: any;

  ngOnInit() {
  }

  findPlace(){
    console.log(this.place);
    this._groomingService.findPlace(this.place)
    .then((data)=>{
      console.log(data);
      this.places=data;
      this._groomingService.findPhoto(this.places.results[0].photos[0].photo_reference)
      .then((data)=>{this.photos=data;})
      .catch((error)=>{console.log(error);});
    })
    .catch((error)=>{console.log(error);})
  }

}
