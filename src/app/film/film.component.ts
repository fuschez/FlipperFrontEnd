import { Component, OnInit, Input } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { FilmService } from 'app/services/film.services';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() 
  public inProiezione: boolean;


  constructor(private filmService : FilmService) {
   }

  public get Films(): Array<IFilm> {
    return this.filmService.Films;
  }

  public get FilmsInSala(): Array<IFilm> {
    return this.filmService.FilmsInSala;
  }

  public get FilmsInUscita(): Array<IFilm> {
    return this.filmService.FilmsInUscita;
  }
  ngOnInit() {
  }

}
