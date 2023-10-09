import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { PaginationComponent } from 'src/app/shared/ui/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarListComponent,
    CarDetailsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
