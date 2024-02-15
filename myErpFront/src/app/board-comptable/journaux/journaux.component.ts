import { Component } from '@angular/core';
import { Journaux } from 'src/app/models/Journaux';
import { JournauxserviceService } from 'src/app/services/journauxservice.service';

@Component({
  selector: 'app-journaux',
  templateUrl: './journaux.component.html',
  styleUrls: ['./journaux.component.css']
})
export class JournauxComponent {
  journaux: Journaux[] = [];
  text=""
  showButton = false;
  showSecondButton = false;
  checkbox: any;
  checkbox1: any;
  val !: any
  check !: any
  num_Journaux !:number
  filtredbydate: Journaux[] = [];
  checkboxPrincipal = false;
  selectedJournaux: { [numJournaux: number]: boolean } = {};

  isJournauxSelected(numJournaux: number): boolean {
    return this.selectedJournaux[numJournaux] || false;
  }

  toggleSelection() {
    for (const journaux of this.filteredItems) {
      this.selectedJournaux[journaux.numJournaux] = this.checkboxPrincipal;
    }
  }

  toggleJournauxSelection(journauxId: number) {
    if (this.selectedJournaux[journauxId]) {
      delete this.selectedJournaux[journauxId];
    } else {
      this.selectedJournaux[journauxId] = true;
    }
  }

  constructor(private journauxservice:JournauxserviceService) { }
  ngOnInit() {
    this.getAllJournaux();
    this.filteredItems;
    console.log(this.val)
  }
  public get filteredItems(): Journaux[] {
    if (this.val) {
      return this.journaux.filter(item => item.dateCreation == this.val);
    } else {
      return this.journaux;
    }
  }

  getAllJournaux() {
    this.journauxservice.getAll().subscribe(
      data => {
        this.journaux = data;

      })
  };
  toggleSelectAll(event: any) {
    this.checkbox = event

    // if (this.checkbox.target.checked) {
    //   this.checkbox = event
    // }
  }
  toggleSelectone(event: any) {
    this.checkbox = !this.checkbox;
  }
  deleteJournauxByNum() {
    this.journauxservice.deleteBynum(this.num_Journaux).subscribe(res => console.log(res));
    this.journaux = this.journaux.filter(res => res.numJournaux != this.num_Journaux);
  };

  deleteAll() {
    this.journauxservice.deleteAll().subscribe(res => {
      console.log(res);
      this.ngOnInit();
      this.showButton = false;
      
    })
  };
  getJournauxByDate(date: Date) {
    this.journauxservice.getBydate(date).subscribe(
      data => {
        this.journaux = data;

      }
    )
  };
  showbutton() {
    this.showButton = !this.showButton;
  }
  showSecondbutton(num:number) {
    this.showSecondButton = !this.showSecondButton;
    this.num_Journaux = num

  }
}
