import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandListComponent } from './brand-list/brand-list.component';


@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
