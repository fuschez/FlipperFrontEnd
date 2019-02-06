import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { CarouselComponent } from './carousel/carousel.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './services/film.services';
import { FilmModule } from './film/film.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.services';
import { LoginModalComponent, LoginModalContent } from './modal-login/modal-login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrizeComponent } from './prize/prize.component';
import { FidelityBonusComponent } from './fidelity-bonus/fidelity-bonus.component';
import { FidelityBonusService } from './services/fidelity-bonus.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoginModalComponent,
    LoginModalContent,
    PrizeComponent,
    FidelityBonusComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FilmModule,
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [
    FilmService,
    UserService,
    FidelityBonusService
  ],
  entryComponents: [LoginModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
