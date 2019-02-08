import { Component, OnInit, Input } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'app/services/film.services';

@Component({
  selector: 'app-page-search',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.scss']
})
export class SearchFilmComponent implements OnInit {

  private film : IFilm;

  constructor(private _filmservice:FilmService, private _route : ActivatedRoute) { }

  ngOnInit() {

  }

  getDomanda(): void {
    const ID = +this._route.snapshot.paramMap.get('id');
    this._filmservice.GetFilm(ID).subscribe(x => this.film = x);
  }

}
