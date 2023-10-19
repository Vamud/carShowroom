import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LanguageService } from '@app/services/language.service';
import { AuthService } from '@features/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  dictionary$ = this.languageService.fetchTranslation();
  errorMessage$ = this.authService.errorMessage$;

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private languageService: LanguageService,
    private authService: AuthService
  ) {}

  logIn() {
    if (this.loginForm.invalid) {
      return;
    }
    
    this.authService.logIn(
      this.loginForm.get('email')!.value as string,
      this.loginForm.get('password')!.value as string
    );
  }
}
