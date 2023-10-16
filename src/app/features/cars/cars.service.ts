import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { BASE_URL, DELIVERY_API_URL } from 'src/environments/environment';
import { CarNode, FilterOptions, FilteredCarsModel } from './cars.model';
import { LanguageService } from 'src/app/core/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  baseUrl = BASE_URL;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  fetchCars(page: number, brand?: string, minPrice?: string, maxPrice?: string) : Observable<FilteredCarsModel> {
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
        return this.http.get<FilteredCarsModel>(BASE_URL + '/content', {
          headers: { 'Accept-Language': language },
          params: params,
        });
      })
    );
  }

  fetchFilterOptions(): Observable<FilterOptions> {
    return this.http.get<FilterOptions>(BASE_URL + '/content?page=1', {
      headers: { 'Accept-Language': 'en-US' },
    });
  }

  fetchCar(carId: string): Observable<CarNode> {
    const url = `${DELIVERY_API_URL}/item/${carId}`;

    return this.languageService.languageObservable$.pipe(
      switchMap((language: string) => {
        return this.http.get<CarNode>(url, {
          headers: { 'Accept-Language': language },
        });
      })
    );
  }
}
