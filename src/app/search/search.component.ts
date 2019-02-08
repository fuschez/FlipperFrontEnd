import { Component, OnInit } from '@angular/core';
import { IFilm } from 'app/models/film.model';
import { Observable, Subject } from 'rxjs';
import { FilmService } from 'app/services/film.services';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  film$: Observable<IFilm[]>;
  title = new Subject<string>();

  constructor(private filmService: FilmService) { }

  search(term: string): void {
    this.title.next(term);
  }

  ngOnInit() {
    this.film$ = this.title.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((x: string) => this.filmService.searchFilmsBy("Title",x))
    );
  }

}
