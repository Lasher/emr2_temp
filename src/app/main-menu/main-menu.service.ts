import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Observable } from "rxjs/observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { ModuleEntry } from "../models/module-entry.model";
import { MenuItemType } from "../models/menu-item.model";

@Injectable()
export class MainMenuService {

  private _currentMenuItem:ModuleEntry
  
  public get currentMenuItem() : ModuleEntry {
    return this._currentMenuItem
  }

  
  public set currentMenuItem(v : ModuleEntry) {
    this._currentMenuItem = v;
  }
  
   

  constructor(private apiService: ApiService) { }

}
