import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Location } from '@angular/common';

import { BackendService } from '@app/services/backend.service';
import { BrandsService } from '@features/brands/brands.service';
import {
  SettingsNode,
  SettingsProperties,
} from '@app/models/settings.model';
import { BrandNodeInterface } from '@features/brands/types/brandNode.interface';
import { LanguageService } from '@app/services/language.service';
import { EnvironmentService } from '@app/services/environment.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  baseApiUrl: string;
  settings!: SettingsProperties;
  brands$ = this.brandsService
    .fetchBrands()
    .pipe(map((data: BrandNodeInterface) => data.items));
  dictionary$ = this.languageService.fetchTranslation();

  constructor(
    private backendService: BackendService,
    private brandsService: BrandsService,
    private location: Location,
    private languageService: LanguageService,
    private environmentService: EnvironmentService
  ) {
    this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
  }

  ngOnInit(): void {
    this.backendService.fetchSettings().subscribe((data: SettingsNode) => {
      this.settings = data.properties;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
