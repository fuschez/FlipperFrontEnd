import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IFidelityBonus } from "app/models/fidelity-bonus";
import { Observable } from "rxjs";

@Injectable()
export class FidelityBonusService{

    private _header = {
        headers : new HttpHeaders({
            "Content-type": "application/json"
        })     
    }
     
    constructor(private _http : HttpClient) {
    }

    public GetFidelity():Observable<IFidelityBonus[]>{
        return this._http.get<IFidelityBonus[]>("http://multisaladelfino.com/api/fidelity");
    }


    public Add(fidelityBonuses:Array<IFidelityBonus>){
        this._http.post<Array<IFidelityBonus>>("http://multisaladelfino.com/api/fidelity",JSON.stringify(fidelityBonuses),this._header);
    }

    public Edit(fidelityBonus:IFidelityBonus){
        this._http.put("http://multisaladelfino.com/api/fidelity",JSON.stringify(fidelityBonus),this._header);
        this.GetFidelity();
    }

    public Delete(){
        
    }
}
