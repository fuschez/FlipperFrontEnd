import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { FidelityBonusComponent } from './fidelity-bonus/fidelity-bonus.component';

import { SearchFilmComponent } from './search-film/search-film.component';
import { SearchGenreComponent } from './search-genre/search-genre.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'info',             component: InfoComponent },
    { path: 'premi',            component: FidelityBonusComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detail-film',      component: SearchFilmComponent},
    { path: 'search-genre/:id',       component: SearchGenreComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
