import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { IItem } from '../items/item';
import { ActivatedRoute, Router} from '@angular/router';
import { IOrder } from './order';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { ITrackingStatus } from './trackingstatus';
import { TrackingService } from './tracking.service';
import { ITrackingLocations } from './trackinglocations';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  animations:[
    trigger('list', [
      transition('* => *',[
        query(':enter', style({opacity: 0}), {optional: true}),
        //Enter
        query(':enter', stagger('300ms', [
          animate('1s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity:.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1})
          ]))
        ])),       
      ])
     
    ])
  ]

})
export class OrderDetailComponent implements OnInit {
  order: IOrder;
  trackstatus: ITrackingStatus;
  // tracklocations: ITrackingLocations[];
  tracklocations: [any];
  errorMessage: string;
  list: any = [];
  status = false;
  shipped = false;
  delivery = false;
  
  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, private _trackingService: TrackingService){}
  orderItems: IItem[] = [];
  ngOnInit() {
    console.log(this.tracklocations);
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
