import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureAgentComponent } from './facture-agent.component';

describe('FactureAgentComponent', () => {
  let component: FactureAgentComponent;
  let fixture: ComponentFixture<FactureAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
