import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective {
  @Output() clickOutSide = new EventEmitter<void>()
  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event.target'])
  onclick( target ){
    let clickedInside = this.elementRef.nativeElement.contains( target )
    console.log('diretiva', clickedInside);
    if( !clickedInside ){
      this.clickOutSide.emit()
    }
    
  }

}
