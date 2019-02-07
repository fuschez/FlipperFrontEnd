import { Injectable } from "@angular/core";
import { IFilm } from "app/models/film.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class FilmService {
    private _listafilm: Array<IFilm>;
    
    private _header = {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    }

    constructor(private _http: HttpClient) {
    }

    public GetFilms() : Observable<IFilm[]>{
        return this._http.get<IFilm[]>("http://multisaladelfino.com/api/films");
        
    }

    public AddFilm(films: Array<IFilm>){
        this._http.post<Array<IFilm>>("http://multisaladelfino.com/api/films",JSON.stringify(films),this._header);
    }

    public EditFilm(film: IFilm){
        this._http.put("http://multisaladelfino.com/api/films", JSON.stringify(film), this._header);
        this.GetFilms();
    }

    public DeleteFilm(){
        
    }

    

    public GetFilmsInSala(): Observable<IFilm[]> {
        return this._http.get<IFilm[]>("http://multisaladelfino.com/api/filmsnow");
    }

    public GetFilmsInUscita(): Observable<IFilm[]> {
        return this._http.get<IFilm[]>("http://multisaladelfino.com/api/filmsnext");
    }

    public Edit(film:IFilm): Observable<any>{
        return this._http.put("http://multisaladelfino.com/api/fidelity",JSON.stringify(film),this._header);    
    }






}


