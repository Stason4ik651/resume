import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GeneralModel } from '../types/general.model';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard {
  m!: GeneralModel;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  init(m: GeneralModel): void {
    this.m = m;
  }

  canDeactivate(): boolean {
    if (Object.keys(this.m.editedTodos).length) {
      return window.confirm(
        'Warning: You are trying to leave this page.\n' +
          'Any unsaved changes will be lost.',
      );
    }
    return true;
  }
}
