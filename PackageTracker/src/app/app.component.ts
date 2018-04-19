import { Component } from '@angular/core';
import { OrderService } from './orders/order.service';
import { TrackingService } from './orders/tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrderService, TrackingService]
})
export class AppComponent {
  pageTitle = 'Package Tracker';
}
