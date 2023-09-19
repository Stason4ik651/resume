import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    if (!this.authService.isAuthenticated()) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      await this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}

export const CanActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(LoginGuard).canActivate();
};
