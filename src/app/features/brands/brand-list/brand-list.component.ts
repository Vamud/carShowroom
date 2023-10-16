import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Location } from '@angular/common';

import { BackendService } from 'src/app/core/services/backend.service';
import { BrandsService } from '../brands.service';
import {
  SettingsNode,
  SettingsProperties,
} from 'src/app/core/models/settings.model';
import { BrandNodeInterface } from '../types/brandNode.interface';
import { LanguageService } from 'src/app/core/services/language.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';

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
