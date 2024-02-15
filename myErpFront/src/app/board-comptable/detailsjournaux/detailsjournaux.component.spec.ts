import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsjournauxComponent } from './detailsjournaux.component';

describe('DetailsjournauxComponent', () => {
  let component: DetailsjournauxComponent;
  let fixture: ComponentFixture<DetailsjournauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsjournauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsjournauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
