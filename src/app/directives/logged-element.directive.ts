import { Directive, HostListener, ElementRef } from '@angular/core';
import { LoggerService } from '../services/logger/logger.service';

@Directive({
  selector: '[appLoggedElement]'
})
export class LoggedElementDirective {

  constructor(private el: ElementRef, private logger: LoggerService) {
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.logger.log(this.el.nativeElement.innerText);
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event) {
    const element = this.el.nativeElement;
    if (element.classList.contains('tile')) {
      element.classList.add('zoom');
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    const element = this.el.nativeElement;
    if (element.classList.contains('tile')) {
      element.classList.remove('zoom');
    }
  }
}
