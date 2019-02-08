import { Component, OnInit } from '@angular/core';
import { FilmService } from 'app/services/film.services';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  urlPoster: string[];

  constructor(private _filmservice : FilmService) { }

  ngOnInit() {
    this.urlPoster = [];
    this._filmservice.GetCarousel().subscribe(x => this.urlPoster = x);
    debugger;
  }

}
