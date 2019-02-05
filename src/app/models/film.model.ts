import { Data } from "@angular/router";

export interface IFilm {
    title: string;
    genres: string;
    relaseDate: Data;
    actors: string;
    duration: number;
    screeningDate:  Data;
    posterUrl: string;
    plot : string;
    inProiezione : boolean;
}