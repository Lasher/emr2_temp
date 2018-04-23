import { Observable } from "rxjs/observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { ApiService } from "../services/api.service";

export class ModuleEntry {
    moduleName:string
    canLoad:boolean
    desc:string

    constructor(){}
}


export class ModuleEntriesList {

    private _list:ModuleEntry[] = [
        { moduleName: 'home', canLoad: true, desc: 'בית' },        
        { moduleName: 'patients', canLoad: true, desc: 'רשימת מטופלים' },
        { moduleName: 'discharged', canLoad: true, desc: 'רשימת משוחררים' }
    ]

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

