import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, mergeMap, switchMap } from 'rxjs';

import { SettingsNode } from '@app/models/settings.model';
import { HomeNode, HomeNodeProperties } from '@app/models/home.model';
import { LanguageService } from '@app/services/language.service';
import { EnvironmentService } from '@app/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  devileryApiUrl: string;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private enviromentService: EnvironmentService
  ) {
    this.devileryApiUrl = this.enviromentService.getValue('deliveryApiUrl');
  }

  fetchSettings(): Observable<SettingsNode> {
    return this.languageService.languageObservable$.pipe(
      mergeMap((language: string) => {
        return this.http.get<SettingsNode>(
          this.devileryApiUrl + '/item/c6cc1268-1de2-43d5-8d6e-7ffde118261a',
          { headers: { 'Accept-Language': language } }
        );
      })
    );
  }

  fetchHomeNode(): Observable<HomeNodeProperties> {
    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http
          .get<HomeNode>(
            this.devileryApiUrl + '/item/8f35db67-a506-403c-9f89-7383b81ca7c9',
            { headers: { 'Accept-Language': language } }
          )
          .pipe(map((data: HomeNode) => data.properties));
      })
    );
  }
}
