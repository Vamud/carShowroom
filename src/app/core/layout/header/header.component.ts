import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SettingsProperties } from '../../models/settings.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() settings: Observable<SettingsProperties> | undefined;
  dictionary$ = this.languageService.fetchTranslation();

  constructor(private languageService: LanguageService) {}

  languageSwitch(lan: string): void {
    this.languageService.setLanguage(lan);
  }
}
