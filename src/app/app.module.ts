import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './store/header/header.component';
import { ProductListComponent } from './store/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
