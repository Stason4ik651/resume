import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;

  constructor(private readonly authService: AuthService) {}

  async login(email: string) {
    await this.authService.login(email);
  }
}
