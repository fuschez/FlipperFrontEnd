import { Data } from "@angular/router";

export interface IFilm {
    nome: string;
    genere: string;
    anno: number;
    attore: string;
    durata: number;
    dataProiezione:  Data;
    pathImg: string;
    trama : string;
    inProiezione : boolean;
}