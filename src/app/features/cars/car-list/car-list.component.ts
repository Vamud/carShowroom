import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, map, Observable, switchMap, combineLatest, BehaviorSubject } from 'rxjs';

import { SettingsNode } from 'src/app/core/models/settings.model';
import { BASE_URL } from 'src/environments/environment';
import { CarModel, FilteredCarsModel } from '../cars.model';
import { CarsService } from '../cars.service';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  baseUrl = BASE_URL;
  totalPages = 4;
  currentPage: number = 1;
  filterForm = new FormGroup({
    brand: new FormControl<string | null | undefined>(null)
  })

  currentPage$ = new BehaviorSubject<number>(1);
  //filterOptions!: Observable<any>;
  
  settings$ = this.backendService.fetchSettings().pipe(map((data: SettingsNode) => data.properties));
  //filterOptions$ = this.carsService.fetchCars(this.currentPage, this.filterForm.value.brand!);
  filterOptions = this.carsService.fetchCars(this.currentPage, this.filterForm.value.brand!);

  // brandChanged$ = this.filterForm.get('brand')?.valueChanges;

  cars$!: Observable<CarModel[]>;
  
  constructor(private backendService: BackendService, private carsService: CarsService) {
  }

  // fetchCars() {
  //   this.cars$ = this.currentPage$.pipe(switchMap((page: number) => {
  //     return this.carsService.fetchCars(page, this.filterForm.get('brand')!.value ?? undefined)
  //       .pipe(map((data: FilteredCarsModel) => data.carModels));
  //   }));
  //   combineLatest(this.currentPage$, this.filterForm.get('brand')!.valueChanges)
  //     .subscribe(([page, brand]) => {
  //       this.cars$ =  this.carsService.fetchCars(page, brand ?? undefined).pipe(map((data: FilteredCarsModel) => data.carModels));
  //     })
  // }


  applyFilters() {
  }
  
   pageChanged(newPage: number) {
    this.currentPage = newPage;
    this.currentPage$.next(newPage);
  }


  priceWithDiscount(price: number, discount: number): number {
  const dis = price * 0.01 * discount;
  return price - dis;
  }


  ngOnInit() {
    // this.currentPage$.pipe(map((page: number) => {
    //   console.log(page);
    //   this.cars$ = this.carsService.fetchCars(page).pipe(map((data: FilteredCarsModel) => data.carModels));
    // }))
    this.currentPage$.pipe(map((page: number) => {
      return page;
    })).subscribe((page: number) => {
      this.cars$ = this.carsService.fetchCars(page).pipe(map((data: FilteredCarsModel) => data.carModels));
    });
    // this.cars$ = this.brandChanged$?.pipe(
    //   startWith(this.filterForm.get('brand')!.value),
    //   switchMap((bra: any) => {
    //   return this.carsService.fetchCars(this.currentPage, bra).pipe(map((data: FilteredCarsModel) => data.carModels));
    // }));
    //this.cars$ = this.carsService.fetchCars(this.currentPage).pipe(map((data: FilteredCarsModel) => data.carModels));

    // combineLatest(this.currentPage$.asObservable(), this.filterForm.get('brand')!.valueChanges)
    //   .subscribe(([page, brand]) => {
    //     this.filterOptions =  this.carsService.fetchCars(page, brand ?? undefined).pipe(map((data: FilteredCarsModel) => data));
    //     this.cars$ =  this.carsService.fetchCars(page, brand ?? undefined).pipe(map((data: FilteredCarsModel) => data.carModels));
    //   })

    // const combine$ = merge(this.currentPage$, this.filterForm.get('brand')!.valueChanges);
    // combine$.subscribe((data) => {
    //   console.log(data);
    // })

    // const combine$ = combineLatest(this.currentPage$, this.filterForm.get('brand')!.valueChanges);
    // combine$.subscribe(([page, brand]) => {
    // })
  }
}
