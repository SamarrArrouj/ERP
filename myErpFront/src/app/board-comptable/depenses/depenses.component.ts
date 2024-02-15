import { Component } from '@angular/core';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/facture.service';
import { LignePanier } from '../../models/LignePanier';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent {
  factures: Facture[] = [];
  somme = 0;
  img = "";
  prix !: number
  total = 0;
  nom !: string;
  constructor(private factureservice: FactureService ) { }
  ngOnInit() {
    this.factureservice.getAll().subscribe(data => {
      this.factures = data;
      this.factures = this.factures.filter(f => f.reglement == "PAYEE")
      for (let facture of this.factures) {
        this.somme += facture.commande.panier.total;
      }
    })
        

      }


  }

