import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IFidelityBonus } from "app/models/fidelity-bonus";

@Injectable()
export class FidelityBonusService{
    private _fidelityBonuses : Array<IFidelityBonus> = [];

    private _header = {
        headers : new HttpHeaders({
            "Content-type": "application/json"
        })     
    }
     
    constructor(private _http : HttpClient) {
        this._fidelityBonuses = [];
    }

    public get GetAll(){
        //this._http.get<Array<IFidelityBonus>>("http://multisaladelfino.com/api/prizes").subscribe((p)=>(this._fidelityBonuses=p));
        this._fidelityBonuses = [];
        var f = <IFidelityBonus>{};
        f.cost = 10;
        f.name = 'Bonus 1';
        f.description = 'Descrizione 1';
        this._fidelityBonuses.push(f);
        var e = <IFidelityBonus>{};
        e.cost = 15;
        e.name = 'Bonus 2';
        e.description = 'Descrizione 2';
        this._fidelityBonuses.push(e);
        return this._fidelityBonuses;
    }

    public Update(){
        //this._http.get<Array<IFidelityBonus>>("http://multisaladelfino.com/api/prizes").subscribe((p)=>(this._fidelityBonuses=p));
        this._fidelityBonuses = this.GetAll;
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
