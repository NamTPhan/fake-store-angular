import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productId: number;
  @Input() thumbnail: string;
  @Input() productName: string;
  @Input() rating: number;
  @Input() price: number;
  @Input() isFavorite: boolean;
  @Output() clickAddToFavorites = new EventEmitter<void>();
  @Output() clickAddToCart = new EventEmitter<void>();

  public handleClickAddFavorite(): void {
    this.clickAddToFavorites.emit();
  }

  public handleClickAddCart(): void {
    this.clickAddToCart.emit();
  }
}
