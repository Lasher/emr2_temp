import { Route, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { UserPermissionService } from "../services/user-permission.service";
import { LoginService } from "../login/login.service";

@Injectable()
export class CanLoadRouteSrv implements CanLoad {
    
    constructor(private userPermissonService:UserPermissionService,
                private loginService:LoginService
    ){}
  
    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        
        if(!this.loginService.isLoginActive())
            return false
        
        let moduleObj = this.userPermissonService.getModuleObj(route.path)

        return moduleObj ? moduleObj['canLoad'] : false;
        //return false
    }
  }