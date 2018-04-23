import { Component } from '@angular/core';
import { OrderService } from './orders/order.service';
import { TrackingService } from './orders/tracking.service';
import { OrderApiService } from './orders/orderApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrderService, TrackingService, OrderApiService]
})
export class AppComponent {
  pageTitle = 'Package Tracker';
}
