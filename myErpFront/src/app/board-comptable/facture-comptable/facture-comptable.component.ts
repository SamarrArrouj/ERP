import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Facture } from 'src/app/models/Facture';
import { User } from 'src/app/models/User';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';
import { FactureService } from 'src/app/services/facture.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-facture-comptable',
  templateUrl: './facture-comptable.component.html',
  styleUrls: ['./facture-comptable.component.css']
})
export class FactureComptableComponent {
  factures: Facture[] = [];
  showbuttonAjout = true;
  searchbynum = "";
  searchbyuser !: string;
  dialogDetails = false;
  dialogEdit = false;
  dialogAdd = false;
  factureDetails !: Facture;
  factureEdit !: Facture;
  factureAdd = new Facture();
  users: User[] = [];
  show = false;
  commandes: Commande[] = [];
  reglements: String[] = [];
  constructor(private factureservice: FactureService, private commandeService
    : CommandeserviceService, private userservice: UserService, private router: Router) { }
  ngOnInit() {
    this.factureservice.getAll().subscribe(data => {
      this.factures = data;
    })
    this.userservice.getusers().subscribe(res => {
      this.users = res;
      console.log(this.users);
      this.users = this.users.filter(user => user.roles[0].name == "ROLE_USER");
      console.log(this.users);
    })
    this.getCommandes();
    this.getReglements();
  }
  getReglements() {
    this.factureservice.getReglements().subscribe(
      res => {
        this.reglements = res;
        console.log(this.reglements);
    }
  )
  }
  getCommandes() {
    this.commandeService.getAll().subscribe(res => {
      this.commandes = res;
      console.log("commandes :",this.commandes)
  })
  }
  deleteFacture(num:number) {
    this.factureservice.delete(num).subscribe(res => console.log(res))
    this.factures=this.factures.filter(facture => facture.numFacture != num)
  }
  opendetails(facture:Facture) {
    this.dialogDetails = true;
    this.show = true;

    this.factureDetails = facture
  }
  savefacture() {
    console.log(this.factureAdd)
    this.factureservice.create(this.factureAdd).subscribe(res => {
      console.log(res)

      this.ngOnInit();
      this.dialogAdd = false;
    })
    window.location.reload;
  }
  openEdit(facture:Facture) {
    this.dialogEdit = true;
    this.show = true;

    this.factureEdit = facture
  }
  openAdd() {
    this.dialogAdd = true
    this.show = true;

  }
  editfacture() {
    this.factureservice.update(this.factureEdit).subscribe(res => { console.log(res) })
    this.show = false;
    this.dialogEdit = false;

    window.location.reload();
  }
  search() {
    this.factures = this.factures.filter(data => data.commande.panier.user.username.toLowerCase().includes(this.searchbynum.toLowerCase()));
  }
  close() {

    this.dialogAdd = false;
    this.show = false;
    this.dialogDetails = false;
    this.dialogEdit = false;

  }

}
