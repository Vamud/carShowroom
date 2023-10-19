import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('src/app/features/auth/auth-routing.module').then(
            (m) => m.AuthRoutingModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/features/home/home-routing.module').then(
            (m) => m.HomeRoutingModule
          ),
      },
      {
        path: 'brands',
        loadChildren: () =>
          import('src/app/features/brands/brands-routing.module').then(
            (m) => m.BrandsRoutingModule
          ),
      },
      {
        path: 'cars',
        loadChildren: () =>
          import('src/app/features/cars/cars-routing.module').then(
            (m) => m.CarsRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
