import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { CarsService } from '../cars.service';
import { CarNode } from '../cars.model';
import { BackendService } from 'src/app/core/services/backend.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  baseApiUrl: string;
  car$: Observable<CarNode> | undefined;
  settings$ = this.backendService
    .fetchSettings()
    .pipe(map((data) => data.properties));
  dictionary$ = this.languageService.fetchTranslation();

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private service: CarsService,
    private location: Location,
    private languageService: LanguageService,
    private environmentService: EnvironmentService
  ) {
    this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
  }

  goBack(): void {
    this.location.back();
  }

  priceWithDiscount(price: number, discount: number): number {
    const dis = price * 0.01 * discount;
    return price - dis;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')!;
      this.car$ = this.service.fetchCar(id).pipe(map((data: CarNode) => data));
    });
  }
}
