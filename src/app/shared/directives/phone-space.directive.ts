import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[PhoneSpace]',
})
export class PhoneSpaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    let input = (event.target as HTMLInputElement).value;

    input = input.replace(/[^0-9]/g, '');

    const formatted = input.match(/.{1,2}/g)?.join(' ');

    if (formatted) {
      this.el.nativeElement.value = formatted;
    }
  }
}
