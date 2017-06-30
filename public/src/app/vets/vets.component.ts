import { Component, OnInit } from '@angular/core';
import { VetsService } from './vets.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  constructor(private _vetsService: VetsService) { }

  place: string = '';
  places: any;
  photos: any;

  ngOnInit() {
  }

  findPlace(){
    console.log(this.place);
    this._vetsService.findPlace(this.place)
    .then((data)=>{
      console.log(data);
      this.places=data;
      this._vetsService.findPhoto(this.places.results[0].photos[0].photo_reference)
      .then((data)=>{this.photos=data;})
      .catch((error)=>{console.log(error);});
    })
    .catch((error)=>{console.log(error);})
  }

}
