import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeModule } from './features/home/home.module';
import { CarsModule } from './features/cars/cars.module';
import { BrandsModule } from './features/brands/brands.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CarsModule,
    BrandsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
