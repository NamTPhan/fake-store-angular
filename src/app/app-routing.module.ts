import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { FavoritePageComponent } from './views/favorite-page/favorite-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { ProductInfoPageComponent } from './views/product-info-page/product-info-page.component';

const routes: Routes = [
  { path: '', title: 'Fake Store Angular', component: HomePageComponent },
  { path: 'favorites', title: 'Favorites', component: FavoritePageComponent },
  {
    path: 'product-info/:id',
    title: 'Product Info',
    component: ProductInfoPageComponent,
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
