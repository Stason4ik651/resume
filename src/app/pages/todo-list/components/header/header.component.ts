import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-todo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class TodoHeaderComponent {
  protected readonly localStorage = localStorage;

  constructor(
    readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
