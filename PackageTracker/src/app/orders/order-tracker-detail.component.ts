import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './order.service';
import { ITrackingStatus } from './trackingstatus';
import { TrackingService } from './tracking.service';
import { ITrackingLocations } from './trackinglocations';

@Component({
  templateUrl: './order-tracker-detail.component.html',
  styleUrls: ['./order-tracker-detail.component.css']
})
export class OrderTrackerDetailComponent implements OnInit {
  order: IOrder;
  trackstatus: ITrackingStatus;
  tracklocations: ITrackingLocations[];
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService,
    private _trackingService: TrackingService
  ) { }

  ngOnInit() {
    console.log('order detail');
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.getOrder(param);
      this.getTrackinig(param);
    }
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
