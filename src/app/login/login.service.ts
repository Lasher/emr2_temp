import { Injectable } from '@angular/core';
import { LoginExtended, LoginRequestType } from "./login.model";
import { ApiService } from "../services/api.service";
import { UserPermissionService } from "../services/user-permission.service";
import { SessionService } from "../services/session.service";
import { ModuleEntry } from "../models/module-entry.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";

@Injectable()

export class LoginService {
  private _userInfo: LoginExtended

  constructor(private apiService: ApiService,
    private userPermissionService: UserPermissionService,
    private router:Router,
    private sessionService:SessionService
  ) { }

  get userInfo(): LoginExtended {
    return this._userInfo
  }

  set userInfo(loginInfo: LoginExtended) {
    // if (loginInfo.login.Active == false) {
    //   throw "Error! user is not authenticated !";
    // }

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


  GetloginAuthentication(req: LoginRequestType): Observable<LoginExtended> {
    let url = "GetloginAuthentication";
    return this.apiService.SetApiData(url, req).map(res => {
      let mapRes: LoginExtended = new LoginExtended()
      mapRes.login = res.login
      mapRes.userDetails = res["userYechidaAndHrTofesAv"]
      return mapRes
    })
  }


  //-- load user modules from menu in db by user role --//
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

  //-- user login exection --//
  LogInExe(loginExt: LoginExtended) {
    this.userInfo = loginExt
    localStorage.setItem("userName", loginExt.login.LoginName)
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = ""

    //-- load modules --//
    this.SetUserModules(1).subscribe(res => 
      this.router.navigate(['/home'])
    )
  }


  setLoginBackgroundStyle() {
    try {

      var x = Math.floor(Math.random() * 5 + 1);
      var y = window.innerHeight;

      var body = document.getElementsByTagName("body")[0];
      if (body) {
        body.style.backgroundSize = "120% " + y * 1.2 + "px"
        body.style.backgroundImage = "url('/assets/images/l" + x + ".jpg')"
      }

      var footer = document.getElementsByTagName("footer");
      if (footer.length > 0) {
        footer[0].style.display = "none";
      }

    } catch (e) {
      var b = e;
    }
  }


  LogOut(){
    this.userInfo = new LoginExtended()
    this.sessionService.SetSessionAbandon().subscribe(res => 
      //this.router.navigate(['/login'])
      window.location.href = '/login'
    )
  }


}
