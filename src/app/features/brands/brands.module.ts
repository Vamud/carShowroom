import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandListComponent } from './brand-list/brand-list.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        BrandListComponent
    ],
    imports: [
        CommonModule,
        BrandsRoutingModule,
        SharedModule,
    ]
})
export class BrandsModule { }
