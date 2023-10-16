import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { DictionaryItem } from '../models/dictionary.model';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language$ = new BehaviorSubject<string>('en-US');
  public languageObservable$: Observable<string> = this.language$.asObservable();

  constructor(private http: HttpClient) {}

  fetchTranslation(): Observable<DictionaryItem[]> {
    return this.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<DictionaryItem[]>(
          BASE_URL + "/content/dictionary",
          { headers: { "Accept-Language": language }}
        );
      })
    );
  }

  setLanguage(newLanguage: string): void {
    this.language$.next(newLanguage);
  }
}
