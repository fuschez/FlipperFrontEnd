import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmService } from 'app/services/film.services';
import { IFilm } from 'app/models/film.model';
import { NgForm } from '@angular/forms';
import { dbFilm } from 'app/models/db-film';
import { newFilm } from 'app/models/new-film';
import { AuthService } from 'app/services/authentication.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('detailsModal')
  public detailsModal;

  films: IFilm[];
  newFilm: newFilm;
  editFilm: dbFilm;
  today: Date = new Date();
  public filmForm: NgForm;
  public editMode: boolean;
  public createMode: boolean;

  constructor(private _filmService: FilmService, private _authService: AuthService) { }

  ngOnInit() {

    this.getFilms();
    this.films = [];
    this.editMode = false;
    this.createMode = false;
    this.newFilm = {
      NAME: "",
      RELEASE_DATE: "",
      PLOT: "",
      DURATION: 0,
      POSTER_URL: ""
    };
    
  }

  getFilms(){
    this._filmService.GetFilms().subscribe(f => this.films = f);
  }

  deleteFilm(id: string) {
    this._filmService.DeleteFilm(id).subscribe();
    this.getFilms();
  }

  createFilm() {
    this._filmService.AddFilm(this.newFilm).subscribe();
  }

  modifyFilm() {
    console.log(this.editFilm.NAME);
    this._filmService.EditFilm(this.editFilm).subscribe();
    this.getFilms();
  }

  toggleEdit(film: IFilm) {
    this.editMode = this.editMode == true ? false : true;

    this.editFilm = {
      ID_FILM: film.IdFilm,
      NAME: film.Title,
      RELEASE_DATE: film.ReleaseDate,
      PLOT: film.Plot,
      POSTER_URL: film.PosterUrl,
      DURATION: film.Duration,
    }
  }

  toggleCreate() {
    this.createMode = this.createMode == true ? false : true;
  }
}
