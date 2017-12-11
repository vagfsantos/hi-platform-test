import { CartService } from './../../cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() productsInCart;
  @Input() totalInCart;
  private cartIsOpen;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.onToggleCart();
  }

  toggleCart(e) {
    e.preventDefault();
    this.cartService.toggleCart();
  }

  onToggleCart() {
    this.cartService
      .onToggleCart$
      .subscribe( isOpened => {
        this.cartIsOpen = isOpened;
      });
  }
}
