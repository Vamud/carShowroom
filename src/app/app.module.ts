import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeModule } from './features/home/home.module';
import { CarsModule } from './features/cars/cars.module';
import { BrandsModule } from './features/brands/brands.module';
import { BreadcrumbsComponent } from './core/layout/breadcrumbs/breadcrumbs.component';
import { SharedModule } from './shared/shared.module';
import { ENVIRONMENT } from './core/services/environment.service';
import { environment } from 'src/environments/environment';

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
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
