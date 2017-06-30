import { Component, OnInit } from '@angular/core';
import { DogcareService } from './dogcare.service';

@Component({
  selector: 'app-dogcare',
  templateUrl: './dogcare.component.html',
  styleUrls: ['./dogcare.component.css']
})
export class DogcareComponent implements OnInit {

  constructor(private _dogcareService: DogcareService) { }

  place: string = '';
  places: any;
  photos: any;

  ngOnInit() {
  }

  findPlace(){
    console.log(this.place);
    this._dogcareService.findPlace(this.place)
    .then((data)=>{
      console.log(data);
      this.places=data;
      this._dogcareService.findPhoto(this.places.results[0].photos[0].photo_reference)
      .then((data)=>{this.photos=data;})
      .catch((error)=>{console.log(error);});
    })
    .catch((error)=>{console.log(error);})
  }

}
