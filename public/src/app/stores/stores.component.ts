import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private _storesService: StoresService) { }

  place: string = '';
  places: any;
  photos: any;

  ngOnInit() {
  }

  findPlace(){
    console.log(this.place);
    this._storesService.findPlace(this.place)
    .then((data)=>{
      console.log(data);
      this.places=data;
      this._storesService.findPhoto(this.places.results[0].photos[0].photo_reference)
      .then((data)=>{this.photos=data;})
      .catch((error)=>{console.log(error);});
    })
    .catch((error)=>{console.log(error);})
  }
  
}
