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
  }


  addProductTocart(e) {
    e.preventDefault();
    this.addedToCart = true;
    this.product.quantity = this.quantity;
    this.cartService.add(this.product);
  }
}
