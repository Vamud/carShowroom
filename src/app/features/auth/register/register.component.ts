import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/core/services/language.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  dictionary$ = this.languageService.fetchTranslation();
  errorMessage$ = this.authService.errorMessage$;
  signInForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  constructor(private languageService: LanguageService, private authService: AuthService) {}

  singIn() {
    const name = this.signInForm.get('name')?.value;
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authService.sighIn(name, email, password);
  }
}
