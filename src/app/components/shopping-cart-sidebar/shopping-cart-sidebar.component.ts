import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart-sidebar',
  templateUrl: './shopping-cart-sidebar.component.html',
  styleUrls: ['./shopping-cart-sidebar.component.scss'],
})
export class ShoppingCartSidebarComponent {
  @Input() isVisible: boolean;
  @Input() cartItems: IProduct[];
  @Output() clickCheckout = new EventEmitter<void>();
  @Output() clickClose = new EventEmitter<void>();
  @Output() clickRemoveProduct = new EventEmitter<number>();

  totalOrderPrice = 0;

  public handleOnClickRemoveProduct(index: number): void {
    this.clickRemoveProduct.emit(index);
  }

  public handleOnClickCheckout(): void {
    this.clickCheckout.emit();
  }

  public handleOnClickClose(): void {
    this.clickClose.emit();
  }
}
