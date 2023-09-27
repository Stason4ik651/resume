import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scroll = document.querySelector('.upward') as HTMLElement;
    if (scroll) {
      scroll.classList.toggle('active', window.scrollY > 600);
    }
  }
}
