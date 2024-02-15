import { Component } from '@angular/core';
import { Commande } from 'src/app/models/Commande';
import { LignePanier } from 'src/app/models/LignePanier';
import { Panier } from 'src/app/models/Panier';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';
import { PanierserviceService } from 'src/app/services/panierservice.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  paniers: Panier[] = [];
  commande = new Commande();
  commandes: Commande[] = [];
  lignepaniers: LignePanier[] = [];
  lignepanier = new LignePanier();
  searchbyclient = ""
 
  constructor(private commandeserviceService:CommandeserviceService,private panierserviceService : PanierserviceService) { }
  ngOnInit() {
    this.getPaniers();
    this.getCommandes();
  }
  deleteCommande(id:number) {
    this.commandeserviceService.delete(id).subscribe(res => console.log(res));
    this.commandes = this.commandes.filter(c => c.id != id);
  }
  getCommande(id:number) {
    // this.commandeserviceService.get(id).subscribe(

    //   res => {
    //     this.commande = res
    //     console.log(this.commande);

    //   } )
  }
  getPaniers() {
    this.panierserviceService.getAll().subscribe(res => {
      this.paniers = res;
      this.lignepaniers = this.paniers[0].lignepaniers;

      console.log("paniers :", this.paniers);
    })
  }
  getCommandes() {
    this.commandeserviceService.getAll().subscribe(data => {
      this.commandes = data;
    })
  }
  search() {
    this.commandes = this.commandes.filter(com => com.panier.user.username.toLowerCase()
      .includes(this.searchbyclient))
  }


}
