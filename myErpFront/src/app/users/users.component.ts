import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { RoleService } from '../services/role.service';
import { Role } from '../models/Role';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  searchbyusername =""
  searchbyemail =""
  users :User[]=[]
  visible= false;
  _user = new User();
  userToEdit = new User();
  userDetails!:User
dialogDetails = false
  dialogEdit = false
  show = false;
  roles: Role[] = []
  isNomTouched = false;
  isSubmitted = false;
  constructor(private userService: UserService, private roleservice: RoleService) { }
  // modalRef: MdbModalRef<UsersComponent> | null = null;
  // modalRef: MdbModalRef<UsersComponent> = null;
  showDialog() {
      this.visible = true;
  }
  adduser() {
    this.isSubmitted = true;
    if (this._user.username && this._user.email && this._user.password && this._user.roles) {
      this.userService.createUser(this._user).subscribe(
        res => {
          console.log(res)
          this.ngOnInit();
        }
      )
    }
  }
  getRoles() {
    this.roleservice.getAllRoles().subscribe(res => {
   this.roles = res
  })
  }
  ngOnInit() {
    this.getRoles();
    this.userService.getusers().subscribe(res => {
      this.users = res
      console.log(this.users)
    })
  }

  geteditUser(user:User) {
    this.userToEdit = user
}
  editUser() {
    this.userService.editUser(this.userToEdit).subscribe(res => {console.log(res)})
  }
  getUser(user: User) {
    this.dialogDetails = true
    this.userDetails = user
    this.show = true;

  }
  reset() {
    this.dialogEdit = false;
    this.dialogDetails = false;
    this.show = false;
  }

  deleteUser(id:number) {
    this.userService.deleteUser(id).subscribe(data => console.log(data))
    this.users = this.users.filter(user => user.id != id)
  }
  search() {

  }
}
