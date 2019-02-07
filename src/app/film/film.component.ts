import { Component, OnInit, Input } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { FilmService } from 'app/services/film.services';
import { stringify } from '@angular/compiler/src/util';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() 
  public inProiezione: boolean;
  public listaFilm: IFilm[];
  public listaFilmInSala: IFilm[];
  public listaFilmInUscita: IFilm[];

  constructor(private filmService : FilmService) {
    
   }

  
  public GetFilms() {
    this.filmService.GetFilms().subscribe(x => this.listaFilm = x);
  }

  public GetFilmsInSala() {
    this.filmService.GetFilmsInSala().subscribe(x=> this.listaFilmInSala = x);
    
  }

  public GetFilmsInUscita() {
    this.filmService.GetFilmsInUscita().subscribe(x=> this.listaFilmInUscita = x);
  }
  ngOnInit() {
    this.listaFilmInSala = [];
    this.listaFilmInUscita = [];
    this.GetFilmsInSala();
    this.GetFilmsInUscita();
  }

}
