import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { BrandNodeInterface } from 'src/app/features/brands/types/brandNode.interface';
import { LanguageService } from 'src/app/core/services/language.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  deliveryApiUrl: string;

  constructor(
    private http: HttpClient, 
    private languageService: LanguageService,
    private environmentService: EnvironmentService
    ) {
      this.deliveryApiUrl = this.environmentService.getValue('deliveryApiUrl');
     }

  fetchBrands(): Observable<BrandNodeInterface> {
    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<BrandNodeInterface>(
          this.deliveryApiUrl +
            '?fetch=children%3A48982d0c-201c-4140-8035-d6f78a98c28e&skip=0&take=10',
          { headers: { 'Accept-Language': language } }
        );
      })
    );
  }
}
