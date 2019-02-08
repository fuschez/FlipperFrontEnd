import { Component, OnInit } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'app/services/film.services';

@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.scss']
})
export class SearchGenreComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _filmservice:FilmService) {

   }

  listaFilmPerGenere : IFilm[]
  ngOnInit() {
    this.listaFilmPerGenere = [];
    this.getDomanda();
  }

  

  getDomanda(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._filmservice.searchFilmsBy("genres",id).subscribe(x => this.listaFilmPerGenere = x);
  }

}
