import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { ModuleEntry, ModuleEntriesList } from "../models/module-entry.model";
import { ApiService } from "../services/api.service";
import { MenuItemType } from "../models/menu-item.model";

@Injectable()
export class UserPermissionService {

  constructor(private apiService: ApiService) { }

  private _modulesMap: Array<ModuleEntry> = [];

  setModuleVal(moduleName: string, value: boolean) {
    let indx = _.findIndex(this._modulesMap, ['moduleName', moduleName])
    this._modulesMap[indx] ?
      this._modulesMap[indx].canLoad = value : null;
  }

  getModulesMap(): Array<ModuleEntry> {
    return this._modulesMap
  }

  SetModulesMap(list: Array<ModuleEntry>) {
    this._modulesMap = list;
  }

  getModuleObj(name: string, list: ModuleEntry[] = null): ModuleEntry {
    !list ? list = this._modulesMap : null
    let res = _.find(list, ['moduleName', name])
    if (!res) {
      for (let index = 0; index < list.length; index++) {
        const item = list[index];
        if (item.children.length > 0) {
          res = this.getModuleObj(name, item.children)
          if(res)
            return res  
        }
      }
    }
    return res;
  }

  GetMenuListByRole(role: number): Observable<Array<ModuleEntry>> {

    return this.apiService.GetApiDataCustom('ApiMenu/GetMenuListX?role=' + role).map((res: Array<MenuItemType>) => {
      let modulesList = new Array<ModuleEntry>()

      for (let index = 0; index < res.length; index++) {
        let item: MenuItemType = res[index];
        let m = new ModuleEntry()

        m.ConvertFromMenuItem(item)

        modulesList.push(m)
      }

      return modulesList
    })
  }



}
