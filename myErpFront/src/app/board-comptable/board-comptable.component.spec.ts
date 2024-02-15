import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComptableComponent } from './board-comptable.component';

describe('BoardComptableComponent', () => {
  let component: BoardComptableComponent;
  let fixture: ComponentFixture<BoardComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComptableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
