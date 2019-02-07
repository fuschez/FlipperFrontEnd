import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FidelityBonusComponent } from './fidelity-bonus/fidelity-bonus.component';
import { FidelityBonusService } from './services/fidelity-bonus.service';
import { AuthService } from './services/authentication.services';
import { Interception } from './services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { MustMatchDirective } from './directives/must-match.directive';
import { InfoComponent } from './info/info.component';



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
    FidelityBonusComponent,
    MustMatchDirective,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FilmModule,
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [
    FilmService,
    UserService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass:Interception, multi : true},
    FidelityBonusService
  ],
  entryComponents: [LoginModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
