import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/layout/header/header.component';
import { FooterComponent } from '@app/layout/footer/footer.component';
import { HomeModule } from '@features/home/home.module';
import { CarsModule } from '@features/cars/cars.module';
import { BrandsModule } from '@features/brands/brands.module';
import { BreadcrumbsComponent } from '@app/layout/breadcrumbs/breadcrumbs.component';
import { SharedModule } from '@shared/shared.module';
import { ENVIRONMENT } from '@app/services/environment.service';
import { environment } from '@env';
import { AuthModule } from '@features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CarsModule,
    BrandsModule,
    BreadcrumbModule,
    SharedModule,
    AuthModule
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
