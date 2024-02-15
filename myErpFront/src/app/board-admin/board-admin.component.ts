import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { Role } from '../models/Role';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  private roles: Role[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  currentuser !: User;
  route = "";
  routePage = "";
  constructor(private storageService: StorageService, private authService: AuthService,private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
       this.currentuser = this.storageService.getUser();
      this.roles = this.currentuser.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = this.currentuser.username;
    }
  }
  // gotoInterface() {
  //   if (this.currentuser.roles[0].name == "ROLE_ADMIN") {

  //     this.routePage = "admin/profile";
  //   } else if (this.currentuser.roles[0].name == "ROLE_AGENT") {

  //     this.routePage = "agent/profile";
  //   }
  //   else if (this.currentuser.roles[0].name == "ROLE_COMPTABLE") {

  //     this.routePage = "comptable/profile";
  //   }
  //   else {

  //     this.routePage = "interfaceuser/profile";
  //   }
  // }
  // goToPage() {
  //   if (this.currentuser.roles[0].name == "ROLE_ADMIN") {

  //     this.route = "admin/editprofile";
  //   } else if (this.currentuser.roles[0].name == "ROLE_AGENT") {

  //     this.route = "agent/editprofile";
  //   }
  //   else if (this.currentuser.roles[0].name == "ROLE_COMPTABLE") {

  //     this.route = "comptable/editprofile";
  //   }
  //   else {

  //     this.route = "interfaceuser/editprofile";
  //   }

  // }

  logout(): void {
    this.storageService.signOut();
    // window.location.reload();
    this.router.navigate(['../../login'])
  }

}
