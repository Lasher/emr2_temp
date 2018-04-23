import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { LoginService } from "../login/login.service";
import { LoginExtended } from "../login/login.model";

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  versionNum:string
  user:LoginExtended = new LoginExtended()

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {  
    this.versionNum = environment.version
    this.user = this.loginService.userInfo
  }

  navigate(url:string){
    this.router.navigate([url])
  }

}
