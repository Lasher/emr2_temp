import { Injectable } from '@angular/core';
import { find, findIndex } from "lodash";
import { ModuleEntry, ModuleEntriesList } from "../models/module-entry.model";

@Injectable()
export class UserPermissionService {

  constructor() { }

  private modulesMap:Array<ModuleEntry> = [];

  setModuleVal(moduleName:string, value:boolean){
    let indx = findIndex(this.modulesMap, ['moduleName', moduleName])
    this.modulesMap[indx] ? 
    this.modulesMap[indx].canLoad = value : null;
  }

  getModulesMap():Array<ModuleEntry>{
    return this.modulesMap
  }

  getModuleObj(name: string):ModuleEntry{
    return find(this.modulesMap, ['moduleName', name]);
  }

  SetModuleEntriesList(){
    let mdlEntLst = new ModuleEntriesList()
    mdlEntLst.GetList().subscribe(res => this.modulesMap = res)
  }

}
