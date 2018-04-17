import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  versionNum:string

  constructor(private router:Router) { }

  ngOnInit() {  
    this.versionNum = environment.version
  }

  navigate(url:string){
    this.router.navigate([url])
  }

}
