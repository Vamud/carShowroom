import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { DELIVERY_API_URL } from 'src/environments/environment';
import { BrandNodeInterface } from 'src/app/features/brands/types/brandNode.interface';
import { LanguageService } from 'src/app/core/services/language.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient, private languageService: LanguageService) { }

  fetchBrands(): Observable<BrandNodeInterface> {
    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<BrandNodeInterface>(
          DELIVERY_API_URL +
            '?fetch=children%3A48982d0c-201c-4140-8035-d6f78a98c28e&skip=0&take=10',
          { headers: { 'Accept-Language': language } }
        );
      })
    );
  }
}
