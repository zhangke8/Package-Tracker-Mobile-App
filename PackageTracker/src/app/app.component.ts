import { Component } from '@angular/core';
import { OrderService } from './orders/order.service';
<<<<<<< HEAD
=======
import { AuthenticationService } from './authentication/authentication.service';
>>>>>>> loginbranch

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
