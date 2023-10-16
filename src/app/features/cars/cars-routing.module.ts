import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Cars'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: CarListComponent
      },
      {
        path: ':id',
        data: {
          breadcrumb: 'Car Details'
        },
        component: CarDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
