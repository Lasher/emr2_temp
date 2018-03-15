import { PatientID } from "../models/patient.model";

//  TO DO: check all classes for validation

// export class UserLogin {
//     active: boolean
//     loginName: string
//     hebrewName: string
//     k_yechida: number
// }

// export class UserChackAtd {
//     user_id: string
//     // TO DO: getter setter with code validation
//     pass: string
// }

// export class UrlUser {
//     userId: string
//     rowId: number
//     defaultApp: boolean
//     active: boolean
// }

export class AppUserInfoType {
    id: number
    user_id: string
    user_name: string
}

export class DataLogin {
    Id: number
    Name: string
    LoginName: string
    LastName: string
    FirstName: string
    patientID: PatientID

    //[DataType(DataType.Password)]
    Password: string

    Active: boolean
    Created: Date
    LastLogin: Date
    k_yechida: number
    msg: string
    appUserInfoType: AppUserInfoType
}


export class AppUserDepartType {
    user_id: string
    k_yechida: string
    shem_katzar_yechida: string
}


export class LoginRequestType {
    userId: string
    password: string
    firstTime: boolean
    isSessionValid: boolean
}

export class UserDetails {
    k_yechida: number
    hr_k_machlaka: number
    hr_machlaka_teur: string
    sugOved: number
    descriptionOved: string
    roleDesc: string
    appUserInfoType: AppUserInfoType
    teudat_zeut: string
    shem_prati: string
    shem_mishp: string
    toar: number
}

export class LoginExtended {
    login: DataLogin
    userDetails: UserDetails
}


