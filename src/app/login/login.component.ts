import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';

// import { UsersData } from './UsersData';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = [];
  remember: boolean = false;
public user:any;
  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private cookieService: CookieService) { 
      // if(cookieService.get('remember') !== undefined){
      //   if(cookieService.get('remember') === "true"){
      //     this.user.uname.set(this.cookieService.get('username')) ;
      //     this.user.passwd.set(this.cookieService.get('password'));
      //     this.remember = true;
      //   }
      // }
    }

  login(user:any): void {
    this.loginService.getAllUsers().subscribe(users => {
      for (let item of users) {
        if (item.username === user.uname && item.password === user.passwd) {
          // this.cookieService.set('username', item.username);  
          // this.cookieService.set('password', item.password); 
          this.cookieService.set('fullname', item.fullname);
          this.cookieService.set('item', JSON.stringify(item));
          if(this.remember){
            this.cookieService.set('remember', "true");
            this.cookieService.set('username', user.uname);  
            this.cookieService.set('password', user.passwd); 
            // this.remember = true;
            console.log(this.remember + " 1")
          }else{
            this.cookieService.set('remember', JSON.stringify(this.remember));
            this.cookieService.set('username', '');
            this.cookieService.set('password', '')
            console.log(this.remember+ " 2")
          }
          this.router.navigate(["home"])
        }
      }
    })
    
  }
checkRemember(e:any): boolean {
  const isCheck = e.target.checked;
  console.log(isCheck);
  if(isCheck){
    this.remember = true;
    return true;
  }else{
    this.remember = false;
    return false;
  }



}
  ngOnInit(): void {
    
  }

  goBack(): void{
    this.location.back();
  }
}
