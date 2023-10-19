import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@features/auth/login/login.component';
import { RegisterComponent } from '@features/auth/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    data: {
      breadcrumb: 'login',
    },
    component: LoginComponent
  },
  {
    path: 'register',
    data: {
      breadcrumb: 'register'
    },
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
