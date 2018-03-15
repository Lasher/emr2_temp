import { Injectable } from '@angular/core';
import { LoginExtended, LoginRequestType } from "./login.model";
import { ApiService } from "../services/api.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService {
  private _userInfo: LoginExtended

  constructor(private apiService:ApiService) { }

  get userInfo(): LoginExtended {
    return this._userInfo
  }

  set userInfo(loginInfo: LoginExtended) {
    if (loginInfo.login.Active == false) {
      throw "Error! user is not authenticated !";
    }

    this._userInfo = loginInfo
  }

  isLoginActive(): boolean {
    if (this.userInfo.login.Active == true)
      return true

    return false
  }


  GetloginAuthentication(req: LoginRequestType):Observable<LoginExtended> {
    let url = "GetloginAuthentication";
    return this.apiService.SetApiData(url, req).map( res => {
      let mapRes:LoginExtended = new LoginExtended()
      mapRes.login = res.login
      mapRes.userDetails = res["userYechidaAndHrTofesAv"]
      return mapRes
    })
  }

}
