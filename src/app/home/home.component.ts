import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { Router, ActivatedRoute } from '@angular/router';  
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import {  FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // users: User;
  userDisplayName = '';  
  // password = ''; 
  // username = '';
  constructor(
    public activatedRoute: ActivatedRoute, 
    private cookieService: CookieService,
    private router: Router
  ) {  
    // this.users = new User();  
    this.userDisplayName = this.cookieService.get('fullname');  
    // this.item = this.cookieService.get('item');  
    // this.password = this.cookieService.get('password'); 
    // this.username = this.cookieService.get('username');  
    // this.users.username = this.userDisplayName;  
    // this.users.password = this.password;  
  }

  checkLogin() : boolean{
    if(this.cookieService.get('item') == ''){
      return false;
    }
    return true;
  }

  logout(): void {  
    this.router.navigate(['/login']);  
    this.cookieService.deleteAll();  
  } 
}
