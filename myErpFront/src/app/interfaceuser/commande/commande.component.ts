import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandeserviceService } from '../../services/commandeservice.service';
import { PanierserviceService } from 'src/app/services/panierservice.service';
import { LignePanier } from 'src/app/models/LignePanier';
import { Panier } from 'src/app/models/Panier';
import { Commande } from 'src/app/models/Commande';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeUserComponent {
  lignepaniers: LignePanier[] = []
  lignepanier = new LignePanier()
  paniers: Panier[] = []
  commande = new Commande();
  commandes: Commande[] = [];
  isNomTouched = false;
  isSubmitted = false;
  id !: number;
  somme = 0;
  constructor(private storageService: StorageService,private commandeserviceService:CommandeserviceService,private panierserviceService : PanierserviceService) { }
  ngOnInit() {
    this.id = this.storageService.getUser().id;
    console.log(this.id)
   this.getPaniers()
  }
  getPaniers() {
    this.panierserviceService.getAll().subscribe(res => {
      this.paniers = res
      this.paniers = this.paniers.filter(p => p.user.id == this.id)
      this.lignepaniers = this.paniers[0].lignepaniers
      for (let ligne of this.lignepaniers) {
        this.somme += ligne.total;
       }
      console.log("paniers :",this.paniers)
    })
  }
  getCommandes() {
    this.commandeserviceService.getAll().subscribe(data => {
      this.commandes = data;
    })
  }

  save() {
    this.isSubmitted = true;
    this.commande.panier = this.paniers[0];
    if (this.commande.numero && this.commande.ville && this.commande.adresse) {
    this.commandeserviceService.create(this.commande).subscribe(data => {
      console.log(data)
    })
  }
  }

}
