import { Component } from '@angular/core';
import { LignepanierserviceService } from '../../services/lignepanierservice.service';
import { LignePanier } from 'src/app/models/LignePanier';
import { PanierserviceService } from 'src/app/services/panierservice.service';
import { Panier } from 'src/app/models/Panier';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  lignepaniers: LignePanier[] = []
  lignepanier = new LignePanier()
  paniers: Panier[] = []
  total !: number
  somme_quantite = 0
  id !:number
  constructor(private lignepanierserviceService: LignepanierserviceService,
    private panierserviceService: PanierserviceService,private storageService: StorageService) { }
  ngOnInit() {
    this.id = this.storageService.getUser().id;
    console.log(this.id)
    this.getPaniers();
    for (let ligne of this.lignepaniers) {
      this.somme_quantite += ligne.quantite
      console.log(this.somme_quantite)
    }
    // this.lignepanierserviceService.getAll().subscribe(data => {
    // this.lignepaniers = data
    // })

  }

  getPaniers() {
    this.panierserviceService.getAll().subscribe(res => {
      this.paniers = res
      this.paniers = this.paniers.filter(p => p.user.id == this.id)
      console.log("paniers :",this.paniers)
      this.lignepaniers = this.paniers[0].lignepaniers
      this.total = this.paniers[0].total;

      // console.log("lignepaniers :",this.lignepaniers)
    })


  }

  delete(id: number) {

    this.lignepanierserviceService.delete(id).subscribe(data =>{
      console.log(data);
      this.lignepaniers = this.lignepaniers.filter(ligne => ligne.id != id)
      this.getPaniers();
    })
  }
  incrementerQuantite(ligne: LignePanier) {
     ligne.quantite++;
    this.lignepanierserviceService.edit(ligne,this.paniers[0].id).subscribe(data => {
      console.log('panier edited +:',data)

    // console.log(ligne)
       this.getPaniers();
    })
  }

  decrementerQuantite(ligne:LignePanier) {
    if (ligne.quantite > 1) {
      ligne.quantite--;
      this.lignepanierserviceService.edit(ligne,this.paniers[0].id).subscribe(data => {
        console.log('panier edited -:', data)
        this.getPaniers();
      })
    }

    }

  calculTotal(ligne: LignePanier,id:number) {
    // this.lignepanierserviceService.get(id).subscribe(data => {
    //   this.lignepanier = data
    //   this.quantite = this.lignepanier.quantite
    // })


    this.ngOnInit();
  }

}
