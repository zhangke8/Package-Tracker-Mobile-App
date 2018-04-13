import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './order.service';

@Component({
  templateUrl: './order-tracker-detail.component.html',
  styleUrls: ['./order-tracker-detail.component.css']
})
export class OrderTrackerDetailComponent implements OnInit {
  order: IOrder;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService
  ) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.getOrder(param);
    }
  }
  getOrder(id: string) {
    this._orderService.getOrder(id).subscribe(
      order => this.order = order,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/orderlist']);
  }
}
