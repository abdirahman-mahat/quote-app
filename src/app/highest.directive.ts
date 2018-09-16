import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem: ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("blue")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("brown")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action;

   }
}
