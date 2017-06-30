import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ParksComponent } from './parks/parks.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { GroomingComponent } from './grooming/grooming.component';
import { DogcareComponent } from './dogcare/dogcare.component';
import { StoresComponent } from './stores/stores.component';
import { VetsComponent } from './vets/vets.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'grooming', component: GroomingComponent },
  { path: 'dogcare', component: DogcareComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'vets', component: VetsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
