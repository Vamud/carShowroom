import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL, DELIVERY_API_URL } from 'src/environments/environment';
import { CarNode, FilteredCarsModel } from './cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  baseUrl = BASE_URL;
  
  constructor(private http: HttpClient) { }

  fetchCars(page: number, brand?: string) {
    let params = new HttpParams().set( 'page', page );

    if (brand && brand !== 'null') {
      params = params.set('brandId', brand);
    }

    return this.http.get<FilteredCarsModel>(
      BASE_URL + '/content',
      {
        headers: { "Accept-Language": "en-US" },
        params: params
      }
    )
  }

  fetchCar(carId: string) {
    const url = `${DELIVERY_API_URL}/item/${carId}`;

    return this.http.get<CarNode>(
      url,
      { headers: { "Accept-Language": "en-US" }});
  }
}
