import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginRequestType, DataLogin } from './login.model';
import { SessionService } from "../services/session.service";
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: ElementRef;

  sessionLoad: boolean
  Wait: boolean
  userLogin: LoginRequestType = new LoginRequestType()
  dataLogin: DataLogin = new DataLogin()
  capLock_message: string
  loginForm:FormGroup = new FormGroup({
    userId: new FormControl(),
    password: new FormControl()
  })

  constructor(private sessionService:SessionService, 
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit() {
    this.sessionLoad = false
    this.Wait = false
    this.userLogin.userId = localStorage.getItem("userName") ? localStorage.getItem("userName") : ""
    this.loginForm.controls.userId.setValue(this.userLogin.userId)
    this.loginForm.controls.password.setValue("")
    this.dataLogin.Active = false
    this.setLoginBackgroundStyle()
    this.capLock_message = ""
  }

  ngAfterViewInit() {
    // localStorage.setItem("userName", this.userLogin.userId)
    // this.loginForm.nativeElement["userId"] ?
    //   this.form.nativeElement["userId"].value = this.userLogin.userId : null
  }


  setLoginBackgroundStyle() {
    try {

      var x = Math.floor(Math.random() * 5 + 1);
      var y = window.innerHeight;

      //var aaa = document.getElementById("aaa");
      var body = document.getElementsByTagName("body")[0];
      if (body) {
        body.style.backgroundSize = "120% " + y * 1.2 + "px"
        body.style.backgroundImage = "url('/assets/images/l" + x + ".jpg')"
      }

      //document.getElementById("container").style.display = "none";
      var footer = document.getElementsByTagName("footer");
      if (footer.length > 0) {
        footer[0].style.display = "none";
      }

    } catch (e) {
      var b = e;
    }
  }


  userKeyPressEvent(keyMsg: string) {
    this.capLock_message = keyMsg
  }

  submitLogin() {
    // this.sessionService.isSessionValid().subscribe(res => {
      
    //   if(res && res.login && res.userDetails){
    //     if(res.userDetails.appUserInfoType){
    //       if(res.userDetails.appUserInfoType.id){
    //         this.loginService.userInfo = res
    //         localStorage.setItem("userName", this.form.nativeElement["userId"].value)
    //         return 
    //       }
    //     }
    //   }
      
    //   console.log("session: ", res)
    // })

    this.Wait = true
    this.userLogin.userId = this.loginForm.controls.userId.value
    this.userLogin.password = this.loginForm.controls.password.value
    this.userLogin.firstTime = true

    this.loginService.GetloginAuthentication(this.userLogin).subscribe(res => {
      console.log(res)
      if(res.login.Active && (res.login.msg == "" || res.login.msg == null)){
        this.loginService.userInfo = res
        localStorage.setItem("userName", res.login.Name)
        var body = document.getElementsByTagName("body")[0];
        body.style.backgroundImage = ""

        // import('../main-menu/main-menu.module').then(module => {
        //   console.log("module load")
        // });

        import('../main-menu/main-menu.module').then(module => {
          console.log("module load")
        });



        this.router.navigate(['/home'])
      }
      this.Wait = false
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
    let inputs = this.getFormRequiredInputs()
    for (let i = 0; i < inputs.length; i++) {
      let elm = inputs[i];
      elm.value = null
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

}