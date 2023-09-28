import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const typed: Typed = new Typed('.text', {
      strings: ['Frontend Developer'],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
    });
  }
}
