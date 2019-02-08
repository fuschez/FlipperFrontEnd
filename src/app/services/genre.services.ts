import { Injectable } from "@angular/core";
import { IGenre } from "app/models/genre.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GenreService{
    private _genre: IGenre[];

    constructor(private _http :HttpClient){

    }

    ngOnInit(): void {
        this._genre = [];
        
    }

    public GetGenres() : Observable<IGenre[]>{
        return this._http.get<IGenre[]>("http://multisaladelfino.com/api/genres");
    }


}