import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Observable } from "rxjs/observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { ModuleEntry } from "../models/module-entry.model";
import { menuItemType } from "../models/menu-item.model";

@Injectable()
export class MainMenuService {

  constructor(private apiService: ApiService) { }


  GetMenuList(role: number): Observable<Array<ModuleEntry>> {

    return this.apiService.GetApiDataCustom('ApiMenu/GetMenuListX?role=' + role).map((res: Array<menuItemType>) => {
      let modulesList = new Array<ModuleEntry>()

      for (let index = 0; index < res.length; index++) {
        let item: menuItemType = res[index];
        let m = new ModuleEntry()
        if (!item.pageUrl.length)
          continue

        m.moduleName = item.pageUrl.substring(1)
        m.desc = item.pageName
        m.canLoad = true
        modulesList.push(m)
      }

      return modulesList
    })
  }

}
