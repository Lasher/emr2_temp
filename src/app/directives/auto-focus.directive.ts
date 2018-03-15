import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective {

  private _autoFocus
  constructor(private el:ElementRef) { }

  ngOnInit()
  {
      if (this._autoFocus || typeof this._autoFocus === "undefined")
          this.el.nativeElement.focus();      //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
  }


  @Input() set autoFocus(condition: boolean)
    {
        this._autoFocus = condition != false;
    }
}
