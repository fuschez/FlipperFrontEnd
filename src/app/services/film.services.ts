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
            pathImg: "assets/img/locandina1.jpg"
        });

        this._listafilm.push({
            nome: "Esempio2",
            genere: "Dramma",
            durata: 180,
            attore: "Pippo, Pappa",
            anno: 2010,
            dataProiezione: new Date(2019, 2, 1),
            pathImg: "assets/img/locandina2.jpg"
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






}


