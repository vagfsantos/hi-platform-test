import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private productList: any;
  private productsInCart: any = [];
  private totalInCart: number = 0;

  constructor(private http: Http, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
    this.onAddProductTocart();
  }

  getProducts() {
    this.http.get('assets/api/data.json')
      .map( response => response.json() )
      .subscribe( data => {
        this.productList = data;
      })
  }

  onAddProductTocart() {
    this.cartService
      .onProductAddedToCart$
      .subscribe( product => {
        this.productsInCart = this.cartService.getAll();
        this.calcTotalincart();
        this.cartService.toggleCart();
      });
  }

  calcTotalincart() {
    this.totalInCart = this.productsInCart.reduce( (initial, product ) => {
      return initial += product.price * product.quantity;
    }, 0)
  }
}
