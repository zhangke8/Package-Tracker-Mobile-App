import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { IItem } from '../items/item';
import { ActivatedRoute, Router} from '@angular/router';
import { IOrder } from './order';
import { ITrackingStatus } from './trackingstatus';
import { TrackingService } from './tracking.service';
import { ITrackingLocations } from './trackinglocations';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
// import { packageLocation } from 

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  animations:[
    trigger('listAnimation', [
      transition('* => *',[
        query(':enter', style({opacity: 0}), {optional: true}),
        //Enter
        query(':enter', stagger('300ms', [
          animate('1s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1})
          ]))
        ]),{optional: true}),   
      ])
    ])
  ]

})
export class OrderDetailComponent implements OnInit {
  order: IOrder;
  trackstatus: ITrackingStatus;
  // tracklocations : ITrackingLocations[];
  list: any = [];
  packageLocation = [
    {
        "_id": "d8fdf8df899affaf89",
        "locationtracker" : [
            {
                "_id" : "12324",
                "location": "Novi, MI US",
                "description" : "Delivered",
                "date": "03/27/2018"
            },
            {
                "_id" : "12324",
                "location": "Farmington, MI US",
                "description" : "Out for delivery",
                "date": "03/27/2018"
            },
            {
                "_id" : "12324",
                "location": "Detroit,MI US",
                "description" : "Package arrived at a carrier facility",
                "date": "03/27/2018"
            },
            {
                "_id": "12324",
                "location":"Kent,WA",
                "description": "Package arrived at a carrier facility",
                "date": "03/26/2018"
            },
            {
                "_id": "12324",
                "location":"Seattle, WA",
                "description": "Package arrived at a carrier facility",
                "date": "03/26/2018"
            },
            {
                "_id": "12324",
                "location":"US",
                "description": "Package has left seller facility and is in transit to carrier",
                "date": "03/26/2018"
            }
        ]
    }
];
  errorMessage: string;
  shipped = false;
  carrier_facility = false;
  out_for_delivery = false;
  delivered = false;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, private trackingService: TrackingService, 
    private http: HttpClient){}
  orderItems: IItem[];
  ngOnInit() {
    console.log("hi " + JSON.stringify(this.packageLocation));
    this.list = this.packageLocation;
    console.log("This is sumn " + this.packageLocation[0].locationtracker[3].description);
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
