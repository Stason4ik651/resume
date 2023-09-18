import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  toggleMenu(): void {
    const menuIcon = this.el.nativeElement.querySelector('#menu-icon');
    const navbar = this.el.nativeElement.querySelector('.navbar');

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  closeMenu(): void {
    const menuIcon = this.el.nativeElement.querySelector('#menu-icon');
    const navbar = this.el.nativeElement.querySelector('.navbar');

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
}
