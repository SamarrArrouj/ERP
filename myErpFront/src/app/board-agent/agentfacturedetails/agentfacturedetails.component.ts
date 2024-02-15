import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-agentfacturedetails',
  templateUrl: './agentfacturedetails.component.html',
  styleUrls: ['./agentfacturedetails.component.css']
})
export class AgentfacturedetailsComponent {
  @ViewChild('content') content !: ElementRef;
  numero_facture !: number;
  facture = new Facture();
  constructor(private factureserviceService : FactureService,private activatedRoute : ActivatedRoute) { }
  ngOnInit() {
    this.numero_facture = this.activatedRoute.snapshot.params['numFacture'];
    this.factureserviceService.get(this.numero_facture).subscribe(data => {
    this.facture = data
    })
  }
  createPDF() {
    let content :any = document.getElementById('content')
    html2canvas(content).then(canvas => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save(`Facture${this.facture.commande.panier.user.username}`); // Generated PDF
      });

  }

}
