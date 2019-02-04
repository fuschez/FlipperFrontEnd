import { Component, OnInit } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { FilmService } from 'app/services/film.services';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {


  constructor(private filmService : FilmService) { }

  public get Films(): Array<IFilm> {
    return this.filmService.Films;
  }
  ngOnInit() {
  }

}
