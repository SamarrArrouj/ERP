import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJournauxComponent } from './ajout-journaux.component';

describe('AjoutJournauxComponent', () => {
  let component: AjoutJournauxComponent;
  let fixture: ComponentFixture<AjoutJournauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutJournauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutJournauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
