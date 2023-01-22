import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './component/film-detail/film-detail.component';
import { FilmListComponent } from './component/film-list/film-list.component';
import { HomeComponent } from './component/home/home.component';
import { PlanetDetailComponent } from './component/planet-detail/planet-detail.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component:RegisterComponent },
  {path: 'film_list', component:FilmListComponent },
  {path: 'film_detail', component:FilmDetailComponent },
  {path: 'planet_detail', component:PlanetDetailComponent },
  {path: '', redirectTo: './home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
