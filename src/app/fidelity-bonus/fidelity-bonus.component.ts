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
    this.getFidelity();
  }

  public getFidelity(){
    this.svc.GetFidelity().subscribe(x => this.fidelityBonuses = x);
  }

}
