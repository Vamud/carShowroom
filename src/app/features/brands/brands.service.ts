import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandNode } from './brands.model';
import { DELIVERY_API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  fetchBrands() {
    return this.http.get<BrandNode>(
      DELIVERY_API_URL + "?fetch=children%3A48982d0c-201c-4140-8035-d6f78a98c28e&skip=0&take=10",
      { headers: { "Accept-Language": "en-US" }}
    );
  }
}
