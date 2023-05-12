import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  public getProductCategories() {
    return this.http.get(this.BASE_URL + '/product/categories');
  }

  public getProducts() {
    return this.http.get(this.BASE_URL + '/products');
  }

  public getProductsOfCategory(category: string) {
    return this.http.get(this.BASE_URL + `/products/category/${category}`);
  }

  public getSearchProducts(searchQuery: string) {
    return this.http.get(this.BASE_URL + `/products/search?q=${searchQuery}`);
  }

  public getSingleProduct(productId: number) {
    return this.http.get(this.BASE_URL + `/products/${productId}`);
  }
}
