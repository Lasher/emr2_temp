import { Observable } from "rxjs/observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

export class ModuleEntry {
    moduleName:string
    canLoad:boolean
    desc:string

    constructor(){}
}


export class ModuleEntriesList {

    private _list:ModuleEntry[] = [
        { moduleName: 'patients', canLoad: true, desc: 'רשימת מטופלים' },
        { moduleName: 'discharged', canLoad: true, desc: 'רשימת משוחררים' }
    ]

    public GetList():Observable<Array<ModuleEntry>> {
        //return new Observable<Array<ModuleEntry>>(res => return this.list)
        return Observable.create(observer => {
            observer.next(this._list);
            observer.complete();
        });
    }
     
}

