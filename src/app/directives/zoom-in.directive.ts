import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background-size', '150%');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 2s');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-size', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 2s');
  }

}
