import { Data } from "@angular/router";

export interface IFilm {
    IdFilm:string;
    Title: string;
    Genres: string;
    ReleaseDate: string;
    Actors: string;
    Duration: number;
    ScreeningDate: string[];
    PosterUrl: string;
    Plot : string;
    LandscapePosterUrl: string;
}