import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderComponent } from './orders/create-order.component';
import { HttpModule } from '@angular/http';
import { OrderService } from './orders/order.service';
import { ItemService } from './items/item.service';
import { ProductListComponent } from './products/product-list.component';
import { OrderDetailComponent } from './orders/order-detail.component';
import { ProductApiService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    OrderDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'createorder', component: CreateOrderComponent},
      { path: 'orderdetail/:id', component: OrderDetailComponent},
      { path: 'products', component: ProductListComponent},
      { path: '', redirectTo: 'createorder', pathMatch: 'full'},
      { path: '**', redirectTo: 'createorder', pathMatch: 'full'}
    ])
  ],
  // providers: [OrderService, ItemService],
  providers: [OrderService, ItemService, ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
