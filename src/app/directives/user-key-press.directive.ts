import { Directive, HostListener, Renderer, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[userKeyPress]'
})
export class UserKeyPressDirective {

  //@Output() userKeyPress = new EventEmitter()
  @Input('userKeyPress') userKeyPress:any
  message: string = ""
  tempMsg: string = ""
  capLock_bool: boolean = false
  shiftKey_bool: boolean = false
  hebrew_bool: boolean = false

  // for barcode scan check //
  inputStartTimestamp: number = 0

  constructor() { }

  // Event listeners for element hosting
  // the directive
  @HostListener('keydown', ['$event']) onkeydown(event: KeyboardEvent) {

    //--- barcode scan check ---//
    // if the user inserted an input in less than 100ms --> that means it was made by a machine...
    // the enter key will be prevented //
    if (event.srcElement['value'] == "" || event.srcElement['value'] == null) {
      this.inputStartTimestamp = event.timeStamp;
    }

    if (event.keyCode == 13) {
      if (event.timeStamp - this.inputStartTimestamp < 100) {
        event.preventDefault();
        if (this.capLock_bool) {
          event.srcElement['value'] = "";
        }
      }
    }
    //--- barcode scan check ---End---//

    //--- caps lock key check ---//
    if (event.keyCode == 20) {
      if (this.capLock_bool) {
        if (!this.shiftKey_bool && !this.hebrew_bool) {
          this.message = "";
        }
        else {
          this.message = this.tempMsg;
        }

        this.capLock_bool = false;
      }
      else {
        this.capLock_bool = true;
        this.tempMsg = this.message;
        this.message = "Caps lock is on";
      }
    }

    //--- check for a single char insertion ---//
    if (event.key && event.key.length && event.key.length == 1) {

      //-- check for hebrew chars insertion --//
      if (event.key >= 'א' && event.key <= 'פֿ') {
        event.preventDefault()
        this.hebrew_bool = true
        this.message = "המקלדת בעברית"
      }

      else 
      {
        //-- check for caps lock --//
        if (event.key >= 'A' && event.key <= 'Z' && !event.shiftKey) {
          if (!this.shiftKey_bool) {
            this.tempMsg = this.message;
            this.message = "Caps lock is on";
            this.capLock_bool = true;
          }
        }

        else {
          // in case of non-capital, check for shift key //
          if (!this.shiftKey_bool) {
            this.message = "";
            this.capLock_bool = false;
            this.hebrew_bool = false;
          }
        }
      }
    }
    //--- check for a single char insertion ---End---//

    //--- shift key detection ---//
    if (event.keyCode == 16) {
      this.shiftKey_bool = true;
      if (this.message != "Shift Key") {
        this.tempMsg = this.message
        this.message = "Shift Key";
      }

      //-- detection for language change 
      // keys combination (alt+shift) --//
      if (this.hebrew_bool) {
        if (event.altKey) {
          if (!this.capLock_bool) {
            this.message = "";
            this.tempMsg = this.message
            this.hebrew_bool = false;
          }
        }
      }
      else {
        if (event.altKey) {
          if (!this.capLock_bool) {
            this.tempMsg = "המקלדת בעברית";
            this.hebrew_bool = true;
          }
        }
      }
    }
    //--- shift key detection ---End---//

    return this.userKeyPress.value = this.message
    //this.userKeyPress.emit(this.message)

  }


  @HostListener('keyup', ['$event']) onkeyup(event: KeyboardEvent) {
    if (event.keyCode == 16 && this.shiftKey_bool) {
      this.shiftKey_bool = false;
      if (this.message == this.tempMsg) {
        this.message = ""
      }
      else {
        this.message = this.tempMsg
      }

      return this.userKeyPress.value = this.message
      //this.userKeyPress.emit(this.message)
    }
  }


}
