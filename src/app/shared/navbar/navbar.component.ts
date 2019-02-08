import { Component, OnInit, ElementRef, OnChanges, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginComponent } from 'app/login/login.component';
import { LoginModalComponent } from 'app/modal-login/modal-login.component';
import { ViewChildren } from '@angular/core';
import { AuthService } from 'app/services/authentication.services';
import { IFilm } from 'app/models/film.model';
import { FilmService } from 'app/services/film.services';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IGenre } from 'app/models/genre.model';
import { GenreService } from 'app/services/genre.services';
import { stringify } from 'querystring';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @ViewChildren(LoginModalComponent) 
    private loginModalComponent;
    private toggleButton: any;
    private sidebarVisible: boolean;

    film$: Observable<IFilm[]>;
    title = new Subject<string>();
    genres : IGenre[];
  

    constructor(public location: Location, private element : ElementRef, private auth:AuthService, private filmservice:FilmService, private genreservice:GenreService) {
        this.sidebarVisible = false;
        
    }

    search(term: string): void {
        this.title.next(term);
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.film$ = this.title.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((x: string) => this.filmservice.searchFilmsBy("Title", x))
          );

        this.genres=[];
        this.genreservice.GetGenres().subscribe(x=>this.genres = x);
        
        
    }

    isLog(){
        this.auth.isLoggedIn();
    }

    doLogout(){
        console.log("ok");
        this.auth.logout();
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isFidelity() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/premi' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    
}
