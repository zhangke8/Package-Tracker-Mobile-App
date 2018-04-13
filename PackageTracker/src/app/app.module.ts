import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orders/order-list.component';
import { OrderTrackerDetailComponent } from './orders/order-tracker-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderTrackerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'orderlist', component: OrderListComponent },
      { path: 'ordertracking/:id', component: OrderTrackerDetailComponent},
      { path: '', redirectTo: 'orderlist', pathMatch: 'full'},
      { path: '**', redirectTo: 'orderlist', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
