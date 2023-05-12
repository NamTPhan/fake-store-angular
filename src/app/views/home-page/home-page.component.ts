import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public products: IProduct[];
  public productCategories: string[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductCategories();
    this.getProducts();
  }

  public getProductsOfCategory(category: string) {
    this.productService
      .getProductsOfCategory(category)
      .subscribe((data: any) => {
        this.products = data.products;
      });
  }

  private getProductCategories(): void {
    this.productService.getProductCategories().subscribe((categories: any) => {
      this.productCategories = categories;
    });
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
