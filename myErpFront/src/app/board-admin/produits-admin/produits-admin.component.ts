import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Facture } from 'src/app/models/Facture';
import { User } from 'src/app/models/User';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';
import { FactureService } from 'src/app/services/facture.service';
import { UserService } from 'src/app/services/user.service';
import {ProduitserviceService} from '../../services/produitservice.service';
import { Produit } from 'src/app/models/Produit';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-produits-admin',
  templateUrl: './produits-admin.component.html',
  styleUrls: ['./produits-admin.component.css']
})
export class ProduitsAdminComponent {
  msg !: string;
  urlpicture :any;
  searchbynum="";
  searchbyprix !:number;
  searchbyuser !: string;
  dialogDetails = false;
  dialogAdd = false;
  produits: Produit[] = [];
  prod = new Produit();
  produit_edited = new Produit();
  produit_details = new Produit();
  isNomTouched = false;
  isSubmitted = false;
  constructor(private produitserviceService:ProduitserviceService, private router: Router,private renderer: Renderer2) { }
  ngOnInit() {
    this.getProducts();
  }
  openDetails(produit: Produit) {
    this.produit_details = produit;
  }
  getProducts() {
    this.produitserviceService.getAll().subscribe(res => {
    this.produits = res;})}
  saveproduit() {
    this.prod.image = this.urlpicture
    this.isSubmitted = true;
    if (this.prod.nom && this.prod.image && this.prod.prix) {
      this.produitserviceService.create(this.prod).subscribe(data => {
        console.log(data);
        this.msg = "Produit ajouté avec succès";
        this.getProducts();
      });
      this.dialogAdd = false;
      //  window.location.reload;
    }
  }
  openEdit(produit: Produit) {
    this.produit_edited = produit;
  }
  openAdd() {
    this.prod = new Produit();

  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);


    reader.onload = (_event) => {
      this.msg = "";
      this.urlpicture = reader.result;


    }

  }

  search() {

  }
  editProduit(id: number) {
    console.log(id)
    this.produit_edited.image = this.urlpicture;
    this.produitserviceService.update(id,this.produit_edited).subscribe(res => {
      console.log(res)
      this.getProducts();
    });
  }
  deleteProduit(id: number) {
    this.produitserviceService.delete(id).subscribe(res => console.log(res));
    this.produits = this.produits.filter(produit => produit.id != id);
  }

}
