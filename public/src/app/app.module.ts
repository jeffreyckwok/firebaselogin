import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginService } from './login.service';
import { ProfileService } from './profile/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsService } from './hotels/hotels.service';
import { ParksComponent } from './parks/parks.component';
import { ParksService } from './parks/parks.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { StoresComponent } from './stores/stores.component';
import { StoresService } from './stores/stores.service';
import { VetsComponent } from './vets/vets.component';
import { VetsService } from './vets/vets.service';
import { DogcareComponent } from './dogcare/dogcare.component';
import { DogcareService } from './dogcare/dogcare.service';
import { GroomingComponent } from './grooming/grooming.component';
import { GroomingService } from './grooming/grooming.service';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAHCtCxDW4Nq_jzsGEjZlFjWt0v40EbzrE",
  authDomain: "rufflifeproject.firebaseapp.com",
  databaseURL: "https://rufflifeproject.firebaseio.com",
  storageBucket: "rufflifeproject.appspot.com",
  messagingSenderId: "187723185353"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    ParksComponent,
    RestaurantsComponent,
    StoresComponent,
    VetsComponent,
    DogcareComponent,
    GroomingComponent,
    DetailsComponent,
    LoginComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [HomeService, HotelsService, ParksService, RestaurantsService, StoresService, VetsService, DogcareService, GroomingService, DetailsService, LoginService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
