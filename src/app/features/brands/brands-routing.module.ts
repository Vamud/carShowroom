import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandListComponent } from '@features/brands/brand-list/brand-list.component';

const routes: Routes = [
  { 
    path: '',
    data: {
      breadcrumb: 'Brands'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: BrandListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
