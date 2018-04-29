import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterState, NavigationCancel, NavigationError } from '@angular/router';
import { LoginService } from "./login/login.service";
import { UserPermissionService } from "./services/user-permission.service";
import { ModuleEntry } from './models/module-entry.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentRoute: string
  isDefaultCheck: boolean

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private userPermissionService: UserPermissionService
  ) { }

  ngOnInit() {
    this.isDefaultCheck = false
    this.router.events.subscribe(event => {

      // NavigationEnd
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url
        console.log(event)
        console.log(this.router.routerState.snapshot)
      }

      // NavigationCancel
      if (event instanceof NavigationCancel) {
        this.router.navigateByUrl(this.router.config.find(r => r.path == "").redirectTo)
      }

      // NavigationError

      // RoutesRecognized
    })

  }
}
