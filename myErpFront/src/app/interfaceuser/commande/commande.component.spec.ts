import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeUserComponent } from './commande.component';

describe('CommandeComponent', () => {
  let component: CommandeUserComponent;
  let fixture: ComponentFixture<CommandeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
