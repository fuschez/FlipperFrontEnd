import { Data } from "@angular/router";

export interface IFilm {
    Id:string;
    Title: string;
    Genres: string;
    RelaseDate: Data;
    Actors: string;
    Duration: number;
    ScreeningDate:  Data;
    PosterUrl: string;
    Plot : string;
    inProiezione : boolean;
}