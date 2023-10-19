import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/core/services/language.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dictionary$ = this.languageService.fetchTranslation();
  errorMessage$ = this.authService.errorMessage$;

  loginForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(private languageService: LanguageService, private authService: AuthService) {}

  logIn() {
    this.authService.logIn(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
  }
}
