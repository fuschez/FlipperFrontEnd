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
  public listaFilm: IFilm[];


  constructor(private filmService : FilmService) {
   }

  
  public GetFilms() {
    this.filmService.GetFilms().subscribe(x => this.listaFilm = x);
  }

  public GetFilmsInSala(): Array<IFilm> {
    return this.filmService.GetFilmsInSala();
  }

  public GetFilmsInUscita(): Array<IFilm> {
    return this.filmService.GetFilmsInUscita();
  }
  ngOnInit() {
    this.GetFilms();
  }

}
