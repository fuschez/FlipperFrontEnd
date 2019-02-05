import { Injectable } from "@angular/core";
import { IFilm } from "app/models/film.model";

@Injectable()
export class FilmService {
    private _listafilm: Array<IFilm>;

    constructor() {
        this._listafilm = [];

        this._listafilm.push({
            nome: "Esempio1",
            genere: "Dramma",
            durata: 90,
            attore: "Ciccio, Panza",
            anno: 1990,
            dataProiezione: new Date(2019, 4, 1),
            pathImg: "assets/img/locandina1.jpg",
            trama:"fberihfoehfoehfouheri v9owhfiuoe hofwh ofhe oehfoehrfureh pgehrfh eofhoierhg orefperhoif bnlfnvpierhf",
            inProiezione: false
        });

        this._listafilm.push({
            nome: "Esempio2",
            genere: "Dramma",
            durata: 180,
            attore: "Pippo, Pappa",
            anno: 2010,
            dataProiezione: new Date(2019, 2, 1),
            pathImg: "assets/img/locandina2.jpg",
            trama:"pwjefnvso esuilsevo frekbvrv r eobv kiewb csj fkewivcdsjfk",
            inProiezione: true
        });
    }

    public get Films(): Array<IFilm> {
        return this._listafilm;
    }

    public AddFilm(){

    }

    public EditFilm(){

    }

    public DeleteFilm(){
        
    }

    public get FilmsInSala(): Array<IFilm> {
        return this._listafilm.filter(v => v.inProiezione);
    }

    public get FilmsInUscita(): Array<IFilm> {
        return this._listafilm.filter(v => !v.inProiezione);
    }






}


