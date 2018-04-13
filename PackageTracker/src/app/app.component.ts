import { Component } from '@angular/core';
import { OrderService } from './orders/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrderService]
})
export class AppComponent {
  pageTitle = 'Package Tracker';
}
