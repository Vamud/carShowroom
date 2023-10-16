import { Component } from '@angular/core';

import { BackendService } from 'src/app/core/services/backend.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseUrl = BASE_URL;
  homeNode = this.backendService.fetchHomeNode();
  dictionary$ = this.languageService.fetchTranslation();

  constructor(private backendService: BackendService, private languageService: LanguageService) {}

}
