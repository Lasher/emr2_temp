import { Component, OnInit } from '@angular/core';
import { MainMenuService } from "../main-menu/main-menu.service";
import { ModuleEntry } from "../models/module-entry.model";

@Component({
  selector: 'app-inner-menu',
  templateUrl: './inner-menu.component.html',
  styleUrls: ['./inner-menu.component.css']
})
export class InnerMenuComponent implements OnInit {

  mainMenuItem:ModuleEntry = new ModuleEntry()

  constructor(private mainMenuService:MainMenuService) { }

  ngOnInit() {
    this.mainMenuItem = this.mainMenuService.currentMenuItem
  }

}
