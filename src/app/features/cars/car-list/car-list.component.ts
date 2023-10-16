import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map, Observable, BehaviorSubject, tap, combineLatest, switchMap, startWith } from 'rxjs';

import { SettingsNode } from 'src/app/core/models/settings.model';
import { BASE_URL } from 'src/environments/environment';
import { CarModel, FilterOptions } from 'src/app/features/cars/cars.model';
import { CarsService } from 'src/app/features/cars/cars.service';
import { BackendService } from 'src/app/core/services/backend.service';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  baseUrl = BASE_URL;

  cars$!: Observable<CarModel[]>;

  totalPages$ = new BehaviorSubject<number>(1);
  currentPage$ = new BehaviorSubject<number>(1);

  filterOptions!: FilterOptions;
  filterForm = new FormGroup({
    brand: new FormControl<string | null | undefined>(null),
    minPrice: new FormControl<string | null | undefined>(null),
    maxPrice: new FormControl<string | null | undefined>(null)
  });
  settings$ = this.backendService
    .fetchSettings()
    .pipe(map((data: SettingsNode) => data.properties));
  dictionary$ = this.languageService.fetchTranslation();

  constructor(
    private backendService: BackendService,
    private carsService: CarsService,
    private renderer: Renderer2,
    private languageService: LanguageService
  ) {}

  applyFilters() {}

  pageChanged(newPage: number) {
    this.currentPage$.next(newPage);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }

  ngOnInit() {
    this.carsService
      .fetchFilterOptions()
      .pipe(map((data: FilterOptions) => data))
      .subscribe((data: FilterOptions) => {
        this.filterOptions = data;
      });

    this.cars$ = combineLatest([
      this.currentPage$.pipe(),
      this.filterForm.get('brand')!.valueChanges.pipe(
        tap(() => this.currentPage$.next(1)),
        startWith(null)
      ),
      this.filterForm.get('minPrice')!.valueChanges.pipe(
        tap(() => this.currentPage$.next(1)),
        startWith(null)
      ),
      this.filterForm.get('maxPrice')!.valueChanges.pipe(
        tap(() => this.currentPage$.next(1)),
        startWith(null)
      ),
    ]).pipe(
      switchMap(([page, brand, minPrice, maxPrice]) => {
        return this.carsService.fetchCars(page, brand!, minPrice!, maxPrice!).pipe(
          tap((data) => {
            this.totalPages$.next(data.totalPages);
          }),
          map((data) => data.carModels)
        );
      })
    );
  }
}
