import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { IItem } from '../items/item';
import { ActivatedRoute, Router} from '@angular/router';
import { IOrder } from './order';
// import { ITrackingStatus } from './trackingstatus';
// import { TrackingService } from './tracking.service';
// import { ITrackingLocations } from './trackinglocations';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;
  // trackstatus: ITrackingStatus;
  // tracklocations: ITrackingLocations[];
  errorMessage: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) { }
    // private _trackingService: TrackingService) { }

  orderItems: IItem[] = [];
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.orderService.getOrderItems(param).subscribe(
        data => {this.orderItems = data; console.log('get Order Items:' + JSON.stringify(this.orderItems)); },
      );
    }
  }

  onBack(): void {
    this.router.navigate(['/createorder']);
  }

}
