import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as saveAs from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Journaux } from 'src/app/models/Journaux';
import { JournauxserviceService } from 'src/app/services/journauxservice.service';


@Component({
  selector: 'app-detailsjournaux',
  templateUrl: './detailsjournaux.component.html',
  styleUrls: ['./detailsjournaux.component.css']
})
export class DetailsjournauxComponent {
  journaux = new Journaux();
  constructor(private activatedroute:ActivatedRoute,private journauxService:JournauxserviceService){}
  ngOnInit() {
    const id = Number(this.activatedroute.snapshot.paramMap.get('numJournaux'));
    this.getCurrentJournaux(id);
  }
  getCurrentJournaux(id:number) {
    this.journauxService.getbynum(id).subscribe(
      res => this.journaux = res
    )
  }
  downloadAsText() {
    const date = new Date(this.journaux.dateCreation);
  const jour = date.getDate();
  const mois = date.getMonth() + 1;
   const annee = date.getFullYear();
    console.log(this.journaux.dateCreation)
    console.log(jour)
    const content = document.getElementById('element')?.textContent || '';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `journaux_${jour}/${mois}/${annee}.txt`);
  }
  createPDF() {
    const date = new Date(this.journaux.dateCreation);
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
     const annee = date.getFullYear();
    let content :any = document.getElementById('content')
    html2canvas(content).then(canvas => {


      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save(`Journaux_${jour}/${mois}/${annee}`); // Generated PDF
      });

  }

}
