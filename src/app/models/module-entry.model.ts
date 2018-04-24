import { Observable } from "rxjs/observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { ApiService } from "../services/api.service";
import { MenuItemType } from "./menu-item.model";

export class ModuleEntry {
    moduleName:string
    canLoad:boolean
    desc:string
    isMain:boolean
    isDefault:boolean
    parentID:number
    sort:number
    children:Array<ModuleEntry> = new Array<ModuleEntry>()

    constructor(){}

    ConvertFromMenuItem(menuItem:MenuItemType){
        this.moduleName = menuItem.pageUrl
        this.desc = menuItem.pageName
        this.canLoad = true
        this.parentID = menuItem.parentUrlPageID
        this.sort = menuItem.urlPageSort
        this.isDefault = menuItem.isDefault
        this.isMain = menuItem.parentUrlPageID == null ? true : false
        
        if(menuItem.children.length > 0){
            for (let index = 0; index < menuItem.children.length; index++) {
                const child = menuItem.children[index];
                let m = new ModuleEntry()
                m.ConvertFromMenuItem(child)
                this.children.push(m)
            }
        }
    }
}


export class ModuleEntriesList {

    private _list:ModuleEntry[] = []

    // public GetList():Observable<Array<ModuleEntry>> {
    //     return Observable.create(observer => {
    //         observer.next(this._list);
    //         observer.complete();
    //     });
    // }

    public GetList():Array<ModuleEntry> {
       return this._list
    }

    public SetList(list:ModuleEntry[]){
        this._list = list
    }
     
}

