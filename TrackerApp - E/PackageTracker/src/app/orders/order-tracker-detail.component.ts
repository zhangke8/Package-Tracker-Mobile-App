import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { IOrder } from './order';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './order.service';
import { ITrackingStatus } from './trackingstatus';
import { TrackingService } from './tracking.service';
import { ITrackingLocations } from './trackinglocations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
let test = require( '../../api/tracking/trackings.js');
@Component({
  templateUrl: './order-tracker-detail.component.html',
  styleUrls: ['./order-tracker-detail.component.css'],
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
export class OrderTrackerDetailComponent implements OnInit {
  order: IOrder;
  trackstatus: ITrackingStatus;
  tracklocations: ITrackingLocations[];
  errorMessage: string;
  list: any = [];
  ordered = false;
  shipped =  false;
  delivery = false;
  delievered= false;
  
  private _trackingUrl = './api/tracking/trackings.json';
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService,
    private _trackingService: TrackingService,
    private _http: HttpClient
  ) { }


  ngOnInit() {
    console.log('order detail');
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.getOrder(param);
      this.getTrackinig(param);
    }

    this._trackingService.getTracking().subscribe(
      data => this.list = JSON.stringify(data));
 this.list = [];
 this._trackingService.getJsonData().then(result => {
   console.log('All Data:', result[0].locationtracker[0].date);
    this.list = JSON.stringify(result);
    console.log('This is from the list in the component' + " " + this.list);
 }).catch(error => {
   console.log('Error getting Data', error);
 });
    
  }
 
  getOrder(id: string) {
    this._orderService.getOrder(id).subscribe(
      order => this.order = order,
      error => this.errorMessage = <any>error);
  }
 getTrackinig(id: string) {
    this._trackingService.getTrackerDetail(id).subscribe(

      trackstatus => {
        this.trackstatus = trackstatus;
        this.tracklocations = trackstatus.locationtracker;
      },
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/orderlist']);
  }
}
