import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {
  public onProductAddedToCart$: EventEmitter<any> = new EventEmitter();
  private productsInCart = [];

  constructor() { }

  public add(product) {
      this.productsInCart.push(product);
      this.onProductAddedToCart$.emit(product);
  }

  public getAll() {
    return this.productsInCart;
  }
}
