import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureComptableComponent } from './facture-comptable.component';

describe('FactureComptableComponent', () => {
  let component: FactureComptableComponent;
  let fixture: ComponentFixture<FactureComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureComptableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
