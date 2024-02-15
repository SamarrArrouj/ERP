import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { PanierserviceService } from '../../services/panierservice.service';
import { LignepanierserviceService } from 'src/app/services/lignepanierservice.service';
import { LignePanier } from 'src/app/models/LignePanier';
import { Panier } from 'src/app/models/Panier';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-interfaceuser',
  templateUrl: './interfaceuser.component.html',
  styleUrls: ['./interfaceuser.component.css']
})
export class InterfaceuserComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username !: string;
  lignepaniers : LignePanier[]=[]
  paniers: Panier[] = []
  id !: number
  sum = 0;
  currentuser !: User;
  constructor(private panierserviceService: PanierserviceService,
    private lignepanierservice: LignepanierserviceService, private storageService: StorageService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
      this.id = this.storageService.getUser().id;
      this.currentuser = this.storageService.getUser();
      this.username = this.currentuser.username;
      this.getPaniers();
  }
  getPaniers() {
    this.panierserviceService.getAll().subscribe(res => {
      this.paniers = res
      this.paniers = this.paniers.filter(p => p.user.id == this.id)
      console.log("paniers :", this.paniers)
      this.lignepaniers = this.paniers[0].lignepaniers
      for (let ob of this.lignepaniers) {
         this.sum += ob.quantite
      }



      // console.log("lignepaniers :",this.lignepaniers)
    })
  }
  logout(): void {
    this.storageService.signOut();
    // window.location.reload();
    this.router.navigate(['../../login'])
  }

}
