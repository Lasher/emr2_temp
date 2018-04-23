import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import { ModuleEntry, ModuleEntriesList } from "../models/module-entry.model";
import { ApiService } from "../services/api.service";
import { menuItemType } from "../models/menu-item.model";

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

  SetModulesMap(list: Array<ModuleEntry>){
    this._modulesMap = list;
  }

  getModuleObj(name: string): ModuleEntry {
    return _.find(this._modulesMap, ['moduleName', name]);
  }

  GetMenuListByRole(role: number): Observable<Array<ModuleEntry>> {

    return this.apiService.GetApiDataCustom('ApiMenu/GetMenuListX?role=' + role).map((res: Array<menuItemType>) => {
      let modulesList = new Array<ModuleEntry>()

      for (let index = 0; index < res.length; index++) {
        let item: menuItemType = res[index];
        let m = new ModuleEntry()
        if (!item.pageUrl.length)
          continue

        m.moduleName = item.pageUrl
        m.desc = item.pageName
        m.canLoad = true
        modulesList.push(m)
      }

      return modulesList
    })
  }



}
