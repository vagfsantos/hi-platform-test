import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../cart.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  private quantity = 1;
  private addedToCart = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.onRemoveProductFromcart();
  }


  addProductTocart(e) {
    e.preventDefault();
    this.addedToCart = true;
    this.product.quantity = this.quantity;
    this.cartService.add(this.product);
  }

  onRemoveProductFromcart() {
    this.cartService
      .onProductRemovedFromCart$
      .subscribe( id => {
        if( this.product.id === id ) this.addedToCart = false;
      });
  }

  addDuplicateProduct(e) {
    e.preventDefault();
    window.alert('Você já adicionou este produto!');
  }
}
