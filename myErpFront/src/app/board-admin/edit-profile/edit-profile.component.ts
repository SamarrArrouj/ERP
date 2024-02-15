import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  currentuser:any
  userform !:User
  id!: number
  token!: string
  userupdate !: User
  role=""
  constructor(private userserviceService: UserService, private authserviceService: StorageService,
  private router :Router) { }
  ngOnInit() {
    this.currentuser = this.authserviceService.getUser();
    console.log(this.currentuser.roles[0]);
    console.log(typeof(this.currentuser.roles[0]));
    this.token = this.authserviceService.getUser().jwtToken;
    this.id = this.currentuser.id
    this.userserviceService.getUser(this.id).subscribe(res => {
    this.userupdate = res
    })


  }
  submit() {
    this.userserviceService.editUser(this.userupdate).subscribe(
      (res: User) => {
        console.log(res)
      }
    )
    if (this.currentuser.roles[0] == "ROLE_ADMIN") {

      this.router.navigate(['admin/profile'])
    } else if (this.currentuser.roles[0] == "ROLE_AGENT") {
      this.router.navigate(['agent/profile'])

    }
    else if (this.currentuser.roles[0] == "ROLE_COMPTABLE") {
      this.router.navigate(['comptable/profile'])

    }
    else {
      this.router.navigate(['interfaceuser/profile'])

     }

  }

}
