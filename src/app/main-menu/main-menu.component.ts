import { Component, OnInit } from '@angular/core';
import { UserPermissionService } from "../services/user-permission.service"; 
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  list = []

  constructor(private userPermissionService:UserPermissionService,
  private router:Router
  ) { }

  ngOnInit() {
    this.list = this.userPermissionService.getModulesMap()
    console.log("list: ", this.list)
    console.log("router: ", this.router)
  }

}
