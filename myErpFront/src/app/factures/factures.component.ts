import { Component } from '@angular/core';
import { Facture } from '../models/Facture';
import { FactureService } from '../services/facture.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { Commande } from '../models/Commande';
import { CommandeserviceService } from '../services/commandeservice.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {
  factures: Facture[] = [];
  selectedDate !: Date;
  showbuttonAjout = true;
  searchbynum !: string;
  searchbyuser ="";
  dialogDetails = false;
  dialogEdit = false;
  dialogAdd = false;
  factureDetails !: Facture;
  factureEdit !: Facture;
  factureAdd = new Facture();
  users: User[] = [];
  show = false;
  commandes: Commande[] = [];
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
    this.dialogEdit=false
    window.location.reload();
  }
  search() {

  }
  filterByDate() {

    this.factures = this.factures.filter(item => {

      const timestamp = item.dateFacture;
      const date = new Date(timestamp);

      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const formattedDate = `${year}-${month}-${day}`;
      return  formattedDate === String(this.selectedDate);
    });
    console.log(this.factures)
  }
  close() {

    this.dialogAdd = false;
    this.show = false;
    this.dialogDetails = false;
    this.dialogEdit = false;

  }
}
