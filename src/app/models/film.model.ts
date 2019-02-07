import { Data } from "@angular/router";

export interface IFilm {
    Id:string;
    Title: string;
    Genres: string;
    RelaseDate: Date;
    Actors: string;
    Duration: number;
    ScreeningDate: Date[];
    PosterUrl: string;
    Plot : string;
}