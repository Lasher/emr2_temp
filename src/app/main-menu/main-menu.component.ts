import { Component, OnInit } from '@angular/core';
import { UserPermissionService } from "../services/user-permission.service"; 
import { MainMenuService } from "./main-menu.service";
import { Router, Routes, ActivatedRoute } from "@angular/router";
import { ModuleEntry } from "../models/module-entry.model";
import * as _ from "lodash";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  list:ModuleEntry[] = []

  constructor(
    private userPermissionService:UserPermissionService,
    private mainMenuService:MainMenuService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.list = this.userPermissionService.getModulesMap()
    this.list = this.list.length > 0 ? _.filter(this.list, ['isMain', true]) : []
    console.log("list: ", this.list)
    console.log("router: ", this.router)
  }

  menuSelect(mdlEnt:ModuleEntry){
    this.mainMenuService.currentMenuItem = mdlEnt
    this.router.navigate([mdlEnt.moduleName], { relativeTo: this.activatedRoute })
  }

}
