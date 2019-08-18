import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 constructor(private elem: ElementRef) {
}
 // private customDirective() {
     // this.elem.nativeElement.style.backgroundColor = '#1fc88d';
}
