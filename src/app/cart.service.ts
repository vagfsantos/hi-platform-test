import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {
  public onProductAddedToCart$: EventEmitter<any> = new EventEmitter();
  public onToggleCart$: EventEmitter<any> = new EventEmitter();
  private productsInCart = [];
  private cartIsOpen = false;

  constructor() { }

  add(product) {
      this.productsInCart.push(product);
      this.onProductAddedToCart$.emit(product);
  }

  getAll() {
    return this.productsInCart;
  }

  toggleCart() {
    this.cartIsOpen = !this.cartIsOpen;
    this.onToggleCart$.emit(this.cartIsOpen);
  }
}
