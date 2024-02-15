import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentfacturedetailsComponent } from './agentfacturedetails.component';

describe('AgentfacturedetailsComponent', () => {
  let component: AgentfacturedetailsComponent;
  let fixture: ComponentFixture<AgentfacturedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentfacturedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentfacturedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
