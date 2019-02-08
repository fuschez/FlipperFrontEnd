import { Data } from "@angular/router";

export interface IFilm {
    IdFilm:string;
    Title: string;
    Genres: string;
    ReleaseDate: Date;
    Actors: string;
    Duration: number;
    ScreeningDate: Date[];
    PosterUrl: string;
    Plot : string;
    LandscapePosterUrl: string;
}