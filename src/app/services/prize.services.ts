import { Injectable } from "@angular/core";
import { IPrize } from "app/models/prize.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PrizeService{
    private _listaPrize : Array<IPrize>;

    private _header = {
        headers : new HttpHeaders({
            "Content-type": "application/json"
        })     
    }
     
    constructor(private _http : HttpClient) {
        
    }

    public get Prizes(){
        return this._listaPrize;
    }

    public Update(){
        this._http.get<Array<IPrize>>("http://multisaladelfino.com/api/prizes").subscribe((p)=>(this._listaPrize=p));
    }

    public AddPrize(prizes:Array<IPrize>){
        this._http.post<Array<IPrize>>("http://multisaladelfino.com/api/prizes",JSON.stringify(prizes),this._header);
    }

    public EditPrize(prize:IPrize){
        this._http.put("http://multisaladelfino.com/api/prizes",JSON.stringify(prize),this._header);
        this.Update();
    }

    public DeletePrize(){
        
    }
}
