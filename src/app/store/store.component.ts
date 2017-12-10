import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private productList: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get('assets/api/data.json')
      .map( response => response.json() )
      .subscribe( data => {
        this.productList = data;
      })
  }
}
