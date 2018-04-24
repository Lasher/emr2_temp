import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { LoginExtended } from "../login/login.model";


@Injectable()
export class SessionService {

  constructor(private apiService:ApiService) { }

  isSessionValid():Observable<LoginExtended> {
    let url = "isSessionValid";
    return this.apiService.SetApiData(url, null).map( res => {
      let mapRes:LoginExtended = new LoginExtended()
      mapRes.login = res.login
      mapRes.userDetails = res["userYechidaAndHrTofesAv"]
      return mapRes
    })
  }

  SetSessionAbandon():Observable<any> {
    let url = "SetSessionAbandon";
    return this.apiService.GetApiData(url)
  }

}
