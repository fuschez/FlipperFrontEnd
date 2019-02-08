import { Injectable } from "@angular/core";
import { IFilm } from "app/models/film.model";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
        return this._http.get<IFilm>(this.url +"/?id=${id}");
    }
    

    public AddFilm(film : IFilm){
        this._http.post<Array<IFilm>>(this.url,JSON.stringify(film),this._header);
    }

    public EditFilm(film: IFilm){
        this._http.put(this.url, JSON.stringify(film), this._header);
        this.GetFilms();
    }

    searchFilmsBy(filter:string ,query: string): Observable<IFilm[]> {
        // if (!query.trim())
        //   return of([]);
        return this._http.get<IFilm[]>(this.url + `/?${filter}=${query}`).pipe();
      }

    public DeleteFilm(){
        
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


