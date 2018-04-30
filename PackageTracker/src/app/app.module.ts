import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orders/order-list.component';
import { OrderTrackerDetailComponent } from './orders/order-tracker-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderComponent } from './orders/create-order.component';
import { ProductListComponent } from './products/product-list.component'
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderTrackerDetailComponent,
    CreateOrderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'orderlist', component: OrderListComponent },
      { path: 'createorder', component: CreateOrderComponent},
      { path: 'ordertracking/:id', component: OrderTrackerDetailComponent},
      { path: 'products', component: ProductListComponent},
      { path: '', redirectTo: 'orderlist', pathMatch: 'full'},
      { path: '**', redirectTo: 'orderlist', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
