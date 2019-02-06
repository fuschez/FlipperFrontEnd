import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityBonusComponent } from './fidelity-bonus.component';

describe('FidelityBonusComponent', () => {
  let component: FidelityBonusComponent;
  let fixture: ComponentFixture<FidelityBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidelityBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidelityBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
