import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { DictionaryItem } from '../models/dictionary.model';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  baseApiUrl: string;
  private language$ = new BehaviorSubject<string>('en-US');
  public languageObservable$: Observable<string> = this.language$.asObservable();

  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
    this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
  }

  fetchTranslation(): Observable<DictionaryItem[]> {
    return this.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<DictionaryItem[]>(
          this.baseApiUrl + "/content/dictionary",
          { headers: { "Accept-Language": language }}
        );
      })
    );
  }

  setLanguage(newLanguage: string): void {
    this.language$.next(newLanguage);
  }
}
