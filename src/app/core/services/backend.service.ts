import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, switchMap } from 'rxjs';

import { SettingsNode } from '../models/settings.model';
import { HomeNode } from '../models/home.model';
import { DELIVERY_API_URL } from 'src/environments/environment';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  fetchSettings() {
    return this.languageService.languageObservable$.pipe(
      mergeMap((language: string) => {
        return this.http.get<SettingsNode>(
          DELIVERY_API_URL + '/item/c6cc1268-1de2-43d5-8d6e-7ffde118261a',
          { headers: { 'Accept-Language': language } }
        );
      })
    );
  }

  fetchHomeNode() {
    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http
          .get<HomeNode>(
            DELIVERY_API_URL + '/item/8f35db67-a506-403c-9f89-7383b81ca7c9',
            { headers: { 'Accept-Language': language } }
          )
          .pipe(map((data: HomeNode) => data.properties));
      })
    );
  }
}
