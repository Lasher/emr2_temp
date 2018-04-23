import { Injectable } from '@angular/core';
import { LoginExtended, LoginRequestType } from "./login.model";
import { ApiService } from "../services/api.service";
import { UserPermissionService } from "../services/user-permission.service";
import { ModuleEntry } from "../models/module-entry.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService {
  private _userInfo: LoginExtended

  constructor(private apiService:ApiService, 
    private userPermissionService:UserPermissionService) { }

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
    try {
      if (this.userInfo.login.Active == true)
        return true
    } catch (error) {
      return false
    }

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


  SetUserModules(role: number): Observable<any> {
    role ? null : role = this.userInfo.userDetails.sugOved
    return Observable.create(observer => {
      this.userPermissionService.GetMenuListByRole(role).subscribe((res: ModuleEntry[]) => {
        this.userPermissionService.SetModulesMap(res)
        observer.next(res)
        observer.complete()
      })
    })

  }

}
