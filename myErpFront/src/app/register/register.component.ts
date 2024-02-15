import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { RoleService } from '../services/role.service';
import { Role } from '../models/Role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles :Role[]=[]

  constructor(private authService: AuthService,private roleService : RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(data => {
    this.roles = data
  })
  }

  onSubmit(f:NgForm): void {

    //  console.log(f.value)
    // this.authService.register(f.value).subscribe(
    //  data => {
    //     console.log(data);

    //   });
    this.authService.register(f.value).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['../login'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
