import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LanguageService } from '@app/services/language.service';
import { AuthService } from '@features/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  dictionary$ = this.languageService.fetchTranslation();
  errorMessage$ = this.authService.errorMessage$;
  signInForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  constructor(private languageService: LanguageService, private authService: AuthService) {}

  singIn() {
    if (this.signInForm.invalid) {
      return;
    }

    this.authService.sighIn(
      this.signInForm.get('name')!.value as string,
      this.signInForm.get('email')!.value as string,
      this.signInForm.get('password')!.value as string
    );
  }
}
