import { Injectable } from "@angular/core";
import { IFilm } from "app/models/film.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { dbFilm } from "app/models/db-film";
import { newFilm } from "app/models/new-film";

@Injectable()
export class FilmService {
    private _listafilm: Array<IFilm>;
    private url = "http://multisaladelfino.com/api/films"; 
    private _header = {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    }

    constructor(private _http: HttpClient) {
    }

    public GetFilms() : Observable<IFilm[]>{
        return this._http.get<IFilm[]>(this.url);
        
    }

    public GetFilm(id:number) : Observable<IFilm>{
        return this._http.get<IFilm>(this.url +`/?id=${id}`);
    }
    

    
    searchFilmsBy(filter:string ,query: string): Observable<IFilm[]> {
        // if (!query.trim())
        //   return of([]);
        return this._http.get<IFilm[]>(this.url + `/?${filter}=${query}`).pipe();
      }

   
    public AddFilm(films: newFilm): Observable<any>{
        return this._http.post<newFilm>("http://multisaladelfino.com/api/films",JSON.stringify(films),this._header);
    }

    public EditFilm(film: dbFilm): Observable<any>{
        return this._http.put("http://multisaladelfino.com/api/films/" + film.ID_FILM, JSON.stringify(film), this._header);
    }

    public DeleteFilm(id: string): Observable<any>{
        return this._http.delete("http://multisaladelfino.com/api/films/" + id, this._header);
    }

    public GetCarousel():Observable<string[]>{
        return this._http.get<string[]>(this.url + "/posters");
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


