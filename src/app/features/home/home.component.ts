import { Component } from '@angular/core';

import { BackendService } from '@app/services/backend.service';
import { EnvironmentService } from '@app/services/environment.service';
import { LanguageService } from '@app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseApiUrl: string;
  homeNode = this.backendService.fetchHomeNode();
  dictionary$ = this.languageService.fetchTranslation();

  constructor(
    private backendService: BackendService, 
    private languageService: LanguageService,
    private environmentService: EnvironmentService) {
      this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
    }

}
