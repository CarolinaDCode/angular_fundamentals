import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /**
   * HostListener, Host es un elemento que implementa la directiva
   * y este es capaz de escuchar eventos en el elemento.
   */

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
  }

  /**
   * ElementRef es un servicio de Angular
   * entonces se realizará una inyección de dependencias
   * En este ejemplo se agregará un fondo a un parrafo, algo que lo podrias hacer con css
   * pero la diferencia es que con la directiva y ElementRef, esta manipulando el DOM directamente.
   */
  constructor(private element: ElementRef) {
      //this.element.nativeElement.style.backgroundColor = '';
   }

}
