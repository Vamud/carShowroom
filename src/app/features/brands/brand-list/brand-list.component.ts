import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend.service';
import { BrandsService } from '../brands.service';
import { BASE_URL } from 'src/environments/environment';
import { SettingsNode } from 'src/app/core/models/settings.model';
import { map } from 'rxjs';
import { BrandNode } from '../brands.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent {
  baseUrl = BASE_URL;
  settings$ = this.backendService.fetchSettings().pipe(map((data: SettingsNode) => data.properties));
  brands$ = this.brandsService.fetchBrands().pipe(map((data: BrandNode) => data.items));

  constructor(
    private backendService: BackendService,
     private brandsService: BrandsService,
     private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
