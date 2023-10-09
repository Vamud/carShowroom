import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { SettingsNode } from '../models/settings.model';
import { HomeNode } from '../models/home.model';
import { DELIVERY_API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  fetchSettings() {
    return this.http.get<SettingsNode>(
      DELIVERY_API_URL + "/item/c6cc1268-1de2-43d5-8d6e-7ffde118261a",
    { headers: { "Accept-Language": "en-US" }});
  }

  fetchHomeNode() {
    return this.http.get<HomeNode>(
      DELIVERY_API_URL + "/item/8f35db67-a506-403c-9f89-7383b81ca7c9",
      { headers: { "Accept-Language": "en-US" }}).pipe(map((data: HomeNode) => data.properties));
  }
}
