import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { Router, ActivatedRoute } from '@angular/router';  
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import {  FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor() {  
}

  
}
