import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarsRoutingModule } from '@features/cars/cars-routing.module';
import { CarListComponent } from '@features/cars/car-list/car-list.component';
import { CarDetailsComponent } from '@features/cars/car-details/car-details.component';
import { PaginationComponent } from '@shared/ui/pagination/pagination.component';
import { PricePipe } from '@shared/ui/pipes/price/price.pipe';
import { DiscountPricePipe } from '@shared/ui/pipes/price/discount-price.pipe';
import { SharedModule } from "@shared/shared.module";


@NgModule({
    declarations: [
        CarListComponent,
        CarDetailsComponent,
        PaginationComponent,
        PricePipe,
        DiscountPricePipe
    ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CarsModule { }
