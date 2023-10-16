import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { CarNode, FilterOptions, FilteredCarsModel } from './cars.model';
import { LanguageService } from 'src/app/core/services/language.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  baseApiUrl: string;
  deliveryApiUrl: string;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private environmentService: EnvironmentService
  ) {
    this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
    this.deliveryApiUrl = this.environmentService.getValue('deliveryApiUrl');
  }

  fetchCars(
    page: number,
    brand?: string,
    minPrice?: string,
    maxPrice?: string
  ): Observable<FilteredCarsModel> {
    let params = new HttpParams().set('page', page);

    if (brand && brand !== 'null') {
      params = params.set('brandId', brand);
    }

    if (minPrice && minPrice !== 'null') {
      params = params.set('minPrice', minPrice);
    }

    if (maxPrice && maxPrice !== 'null') {
      params = params.set('maxPrice', maxPrice);
    }

    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<FilteredCarsModel>(this.baseApiUrl + '/content', {
          headers: { 'Accept-Language': language },
          params: params,
        });
      })
    );
  }

  fetchFilterOptions(): Observable<FilterOptions> {
    return this.http.get<FilterOptions>(this.baseApiUrl + '/content?page=1', {
      headers: { 'Accept-Language': 'en-US' },
    });
  }

  fetchCar(carId: string): Observable<CarNode> {
    const url = `${this.deliveryApiUrl}/item/${carId}`;

    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<CarNode>(url, {
          headers: { 'Accept-Language': language },
        });
      })
    );
  }
}
