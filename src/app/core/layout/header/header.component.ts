import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SettingsProperties } from '../../models/settings.model';
import { LanguageService } from '../../services/language.service';
import { AuthService } from 'src/app/features/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() settings: Observable<SettingsProperties> | undefined;
  dictionary$ = this.languageService.fetchTranslation();
  isAuth$ = this.authService.isAuth$;
  userName$ = this.authService.userName$;

  constructor(private languageService: LanguageService, private authService: AuthService) {}

  languageSwitch(lan: string): void {
    this.languageService.setLanguage(lan);
  }

  logOut() {
    this.authService.logOut();
  }
}
