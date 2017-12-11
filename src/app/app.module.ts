import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './store/header/header.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './store/cart/cart.component';
import { ProductComponent } from './store/product-list/product/product.component';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
