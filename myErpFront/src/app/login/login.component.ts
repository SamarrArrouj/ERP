import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { NgForm } from '@angular/forms';
import { Role } from '../models/Role';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  role!:string

  constructor(private authService: AuthService, private storageService: StorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(f:NgForm): void {

    // this.authService.login(f.value).subscribe(
    //   data => {
    //     console.log(data);
    //   });
    this.authService.login(f.value).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.role = this.roles[0]
        if (this.role == 'ROLE_ADMIN') {
        this.router.navigate(['../admin'])
        }
        else if (this.role == 'ROLE_MODERATOR') {
          this.router.navigate(['../moderator'])

        }
        else if (this.role == 'ROLE_AGENT') {
          this.router.navigate(['../agent'])

        }
        else if (this.role == 'ROLE_COMPTABLE') {
          this.router.navigate(['../comptable'])

        }
        else {
          this.router.navigate(['../interfaceuser'])

        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
