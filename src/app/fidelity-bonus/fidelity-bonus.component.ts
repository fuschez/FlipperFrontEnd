import { Component, OnInit, OnDestroy } from '@angular/core';
import { FidelityBonusService } from 'app/services/fidelity-bonus.service';
import { IFidelityBonus } from 'app/models/fidelity-bonus';

@Component({
  selector: 'app-fidelity-bonus',
  templateUrl: './fidelity-bonus.component.html',
  styleUrls: ['./fidelity-bonus.component.scss']
})
export class FidelityBonusComponent implements OnInit {
  
  public fidelityBonuses: IFidelityBonus[];
  
  constructor(private svc: FidelityBonusService) { }
  
  ngOnInit() {
<<<<<<< HEAD
    this._listafidelity=[];
    this.GetFidelity();
  }

  public GetFidelity(){
    this.svc.GetFidelity().subscribe(x => this._listafidelity=x);
    debugger;
=======
    this.getFidelity();
  }

  public getFidelity(){
    this.svc.GetFidelity().subscribe(x => this.fidelityBonuses = x);
>>>>>>> 14744f47b3134c5ec34083262defc47f93993218
  }

}
