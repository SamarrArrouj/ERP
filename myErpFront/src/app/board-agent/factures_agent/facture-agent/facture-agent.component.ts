import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Facture } from 'src/app/models/Facture';
import { User } from 'src/app/models/User';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';
import { FactureService } from 'src/app/services/facture.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-facture-agent',
  templateUrl: './facture-agent.component.html',
  styleUrls: ['./facture-agent.component.css']
})
export class FactureAgentComponent {
  factures: Facture[] = [];
  @Input()
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
  isNomTouched = false;
  isSubmitted = false;
  constructor(private factureservice: FactureService,private commandeService : CommandeserviceService,private userservice:UserService,private router :Router) { }
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
    this.isSubmitted = true;
    console.log(this.factureAdd)
    if (this.factureAdd.title && this.factureAdd.commande) {
    this.factureservice.create(this.factureAdd).subscribe(res => {
      console.log(res)

      this.ngOnInit();
      this.dialogAdd = false;
    })
    }
    
    // window.location.reload;
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
