import { Component } from '@angular/core';
import { Produit } from 'src/app/models/Produit';
import { LignepanierserviceService } from 'src/app/services/lignepanierservice.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { LignePanier } from '../../models/LignePanier';
import { PanierserviceService } from 'src/app/services/panierservice.service';
import { Panier } from 'src/app/models/Panier';
import { User } from 'src/app/models/User';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: Produit[] = [];
  ligne_Panier = new LignePanier();
  panier = new Panier();
  user = new User();
  CratedLineCart = false
  show !:boolean;
  groupSize: number = 3;// Nombre de produits par groupe
  id !: number;
  lignepaniers: LignePanier[] = []
  lignepanier = new LignePanier()
  paniers: Panier[] = []
  isDisabled !:boolean;
  x = new Produit()
  y = new Produit()

  get groupIndexes(): number[] {
    const totalGroups = Math.ceil(this.produits.length / this.groupSize);
    return Array.from({ length: totalGroups }, (_, index) => index);
  }

  getProductIndexesInGroup(groupIndex: number): number[] {
    const start = groupIndex * this.groupSize;
    const end = start + this.groupSize;
    return Array.from({ length: this.groupSize }, (_, index) => start + index)
                 .filter(index => index < this.produits.length);
  }
  constructor(private storageService: StorageService,private router :Router,
    private panierservice: PanierserviceService,private panierserviceService: PanierserviceService,
    private produitservice: ProduitserviceService, private lignepanierservice: LignepanierserviceService) { }

  ngOnInit() {
    this.id = this.storageService.getUser().id;
    this.panierserviceService.getAll().subscribe(res => {
      this.paniers = res
      this.paniers = this.paniers.filter(p => p.user.id == this.id)
      console.log("paniers :", this.paniers)
      this.lignepaniers = this.paniers[0].lignepaniers
      console.log(this.lignepaniers);

    })
    localStorage.setItem('buttonshowstate', 'true')
    this.user = this.storageService.getUser();
    this.produitservice.getAll().subscribe(data => {
      this.produits = data;

    })
    for (let produit of this.produits){

    this.isDisabled =this.produitsExistentDansPanier(produit.id)
    }
    console.log(this.isDisabled);


  }
  produitsExistentDansPanier(id:number): boolean {
    let produitsExistants = false;

      if (this.lignepaniers.some(ligne => ligne.produit.id != id)) {
        produitsExistants = true;
     };

    return produitsExistants;
  }



  AddToPanier(produit: Produit) {
    // localStorage.setItem('buttonshowstate','true')
    let lignePanier = new LignePanier();
    lignePanier.produit = produit;
    console.log(lignePanier);
    this.panierservice.create(this.user.id,lignePanier).subscribe(res => {
      this.panier = res
      console.log(this.panier);
      this.CratedLineCart = true;
    })
    // this.router.navigate(['interfaceuser/panier'])
  }

}
