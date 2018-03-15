
export enum PatientIDType { MisparIshpuz, TeudatZehut, Passport, Temporary }

export class PatientID {
    private _id:string


    get id():string {
        return this._id;
    }
    set id(value:string) {
        if(value.indexOf('A') == 0){
            throw new Error("invalid id value ! " + value)
        }
        this._id = value;
    }
}

