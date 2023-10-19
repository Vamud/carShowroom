import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { CarsService } from '@features/cars/cars.service';
import { CarNode } from '@features/cars/cars.model';
import { BackendService } from '@app/services/backend.service';
import { LanguageService } from '@app/services/language.service';
import { EnvironmentService } from '@app/services/environment.service';
import { AuthService } from '@features/auth/auth.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  baseApiUrl: string;
  isAuth$ = this.authService.isAuth$;
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
    private environmentService: EnvironmentService,
    private authService: AuthService
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
