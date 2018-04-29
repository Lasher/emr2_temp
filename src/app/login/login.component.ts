import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { LoginRequestType, DataLogin } from './login.model';
import { SessionService } from "../services/session.service";
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login.service';
import { UserPermissionService } from "../services/user-permission.service";

import { HomeComponent } from "../home/home.component";
import { PatientsComponent } from "../patients/patients.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: ElementRef;

  isSessionLoaded: boolean
  Wait: boolean
  userLogin: LoginRequestType = new LoginRequestType()
  dataLogin: DataLogin = new DataLogin()
  capLock_message: any
  loginForm:FormGroup = new FormGroup({
    userId: new FormControl(),
    password: new FormControl()
  })

  constructor(private sessionService:SessionService, 
    private loginService:LoginService,
    private router:Router,
    private userPermissionService:UserPermissionService
  ) { }

  ngOnInit() {
    this.isSessionLoaded = false
    this.Wait = false
    let lclStrgUsr = localStorage.getItem("userName");
    this.userLogin.userId = lclStrgUsr && lclStrgUsr != "null" ? lclStrgUsr : ""
    this.loginForm.controls.userId.setValue(this.userLogin.userId)
    this.loginForm.controls.password.setValue("")
    this.dataLogin.Active = false 
    this.capLock_message = {value: ""}

    this.sessionValidation()
  }

  ngAfterViewInit() {
    // localStorage.setItem("userName", this.userLogin.userId)
    // this.loginForm.nativeElement["userId"] ?
    //   this.form.nativeElement["userId"].value = this.userLogin.userId : null
  }



  userKeyPressEvent(keyMsg: string) {
    this.capLock_message = keyMsg
  }

  submitLogin() {
   
    this.Wait = true
    this.userLogin.userId = this.loginForm.controls.userId.value
    this.userLogin.password = this.loginForm.controls.password.value
    this.userLogin.firstTime = true
    this.loginForm.disable()

    this.loginService.GetloginAuthentication(this.userLogin).subscribe(res => {
      console.log(res)
      if(res.login.Active && (res.login.msg == "" || res.login.msg == null)){
        this.loginService.LogInExe(res)

        // import('../main-menu/main-menu.module').then(module => {
        //   console.log("module load")
        // });

      }

      this.dataLogin.msg = res.login.msg
      this.Wait = false
      this.loginForm.enable()
    }) 


  }

  isFormValid(): boolean {
    let inputs = this.getFormRequiredInputs()
   
    for (let i = 0; i < inputs.length; i++) {
      let elm = inputs[i];
      if(elm.value != null && elm.value.length == 0)
      return false
    }

    return inputs.length > 0 ? true : false
  }

  clearFields() {
    let keys = Object.keys(this.loginForm.controls)
    for (let index = 0; index < keys.length; index++) {
      let key = keys[index]
      this.loginForm.get(key).setValue("")
    }
  }

  getFormRequiredInputs(): Array<any> {
    let array = this.form.nativeElement ? this.form.nativeElement : []
    let inputs = []

    for (let i = 0; i < array.length; i++) {
      let elm = array[i];
      if (elm.required) {
        inputs.push(elm)
      }
    }

    return inputs
  }


  sessionValidation(){
    this.Wait = true
    this.isSessionLoaded = false
    this.sessionService.isSessionValid().subscribe(res => {
      
      if(res && res.login && res.userDetails){
        if(res.userDetails.appUserInfoType){
          if(res.userDetails.appUserInfoType.id){
            this.loginService.LogInExe(res)
            return 
          }
        }
      }
      this.Wait = false
      this.isSessionLoaded = true
      this.loginService.setLoginBackgroundStyle()
    })
  }

}
