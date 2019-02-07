import { Component, OnInit, OnDestroy } from '@angular/core';
import { FidelityBonusService } from 'app/services/fidelity-bonus.service';
import { IFidelityBonus } from 'app/models/fidelity-bonus';

@Component({
  selector: 'app-fidelity-bonus',
  templateUrl: './fidelity-bonus.component.html',
  styleUrls: ['./fidelity-bonus.component.scss']
})
export class FidelityBonusComponent implements OnInit {
  
  public _listafidelity: IFidelityBonus[];
  
  constructor(private svc: FidelityBonusService) { }
  
  ngOnInit() {
    this.GetFidelity();
  }

  public GetFidelity(){
    this.svc.GetFidelity().subscribe(x=>this._listafidelity=x);
  }

}
