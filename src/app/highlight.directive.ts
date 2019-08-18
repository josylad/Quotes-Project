import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;

 constructor(private elem: ElementRef) {
     this.elem.nativeElement.style.backgroundColor = '#1fc88d';
 }


}
