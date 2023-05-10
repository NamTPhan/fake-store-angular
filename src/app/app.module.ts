import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndeterminateProgressBarComponent } from './components/indeterminate-progress-bar/indeterminate-progress-bar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FavoritePageComponent } from './views/favorite-page/favorite-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ProductInfoPageComponent } from './views/product-info-page/product-info-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndeterminateProgressBarComponent,
    SearchbarComponent,
    FavoritePageComponent,
    HomePageComponent,
    ProductInfoPageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
