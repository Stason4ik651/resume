import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  menuClass: string = '';

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.menuClass = this.getMenuClass(url);
      }
    });
  }

  getMenuClass(url: string): string {
    switch (url) {
      case '/':
        return 'header';
      case '/watches':
        return 'unfixed-header';
      case '/calculator':
        return 'unfixed-header';
      case '/movies':
        return 'unfixed-header';
      case '/todo':
        return 'unfixed-header';
      case '/snake':
        return 'unfixed-header';
      default:
        return '';
    }
  }

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
