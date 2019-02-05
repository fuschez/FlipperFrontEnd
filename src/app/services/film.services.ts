import { Injectable } from "@angular/core";
import { IFilm } from "app/models/film.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FilmService {
    private _listafilm: Array<IFilm>;
    
    private _header = {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    }

    constructor(private _http: HttpClient) {
        this._listafilm = [];
        this.Update();
    }

    public Update() {
        this._http.get<Array<IFilm>>("http://multisaladelfino.com/api/films").subscribe((f) => {this._listafilm = f});
        
    }

    public AddFilm(films: Array<IFilm>){
        this._http.post<Array<IFilm>>("http://multisaladelfino.com/api/films",JSON.stringify(films),this._header);
    }

    public EditFilm(film: IFilm){
        this._http.put("http://multisaladelfino.com/api/films", JSON.stringify(film), this._header);
        this.Update();
    }

    public DeleteFilm(){
        
    }

    public get Films():Array<IFilm> {
        return this._listafilm;
    }

    public get FilmsInSala(): Array<IFilm> {
        if(this._listafilm.length>0){
            return this._listafilm.filter(v => v.inProiezione);
        }
        return null;
    }

    public get FilmsInUscita(): Array<IFilm> {
        if(this._listafilm.length>0){

            return this._listafilm.filter(v => !v.inProiezione);
        }
        return null;
    }






}


