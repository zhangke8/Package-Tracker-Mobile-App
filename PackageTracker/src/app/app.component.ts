import { Component } from '@angular/core';
import { OrderService } from './orders/order.service';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})

export class AppComponent {
  pageTitle = 'Package Tracker';
  constructor(public auth: AuthenticationService) {}
}
