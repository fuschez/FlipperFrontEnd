import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IFidelityBonus } from "app/models/fidelity-bonus";

@Injectable()
export class FidelityBonusService{
    private _fidelityBonuses : Array<IFidelityBonus>;

    private _header = {
        headers : new HttpHeaders({
            "Content-type": "application/json"
        })     
    }
     
    constructor(private _http : HttpClient) {
        
    }

    public get GetAll(){
        //this._http.get<Array<IFidelityBonus>>("http://multisaladelfino.com/api/prizes").subscribe((p)=>(this._fidelityBonuses=p));
        return this._fidelityBonuses;
    }

    public Update(){
        this._http.get<Array<IFidelityBonus>>("http://multisaladelfino.com/api/prizes").subscribe((p)=>(this._fidelityBonuses=p));
    }

    public Add(fidelityBonuses:Array<IFidelityBonus>){
        this._http.post<Array<IFidelityBonus>>("http://multisaladelfino.com/api/prizes",JSON.stringify(fidelityBonuses),this._header);
    }

    public Edit(fidelityBonus:IFidelityBonus){
        this._http.put("http://multisaladelfino.com/api/prizes",JSON.stringify(fidelityBonus),this._header);
        this.Update();
    }

    public Delete(){
        
    }
}
