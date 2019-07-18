import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  constructor() { }

  @Input() value : string = "";

  // @HostListener( "", ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   console.log("hello");
  // }

}
