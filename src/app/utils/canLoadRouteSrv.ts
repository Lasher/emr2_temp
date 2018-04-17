import { Route, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { UserPermissionService } from "../services/user-permission.service";

@Injectable()
export class CanLoadRouteSrv implements CanLoad {
    
    constructor(private userPermissonService:UserPermissionService){}
  
    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        let moduleObj = this.userPermissonService.getModuleObj(route.path)
        
        return moduleObj ? moduleObj['canLoad'] : false;
        //return false
    }
  }