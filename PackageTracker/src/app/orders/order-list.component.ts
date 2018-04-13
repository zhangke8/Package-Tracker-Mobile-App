import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  pageTitle = 'Order List';
  imageWidth = 50;
  imagMargin = 2;
  errorMessage: string;
  constructor(private _orderService: OrderService) { }
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredOrders = this.listFilter ? this.performFilter(this.listFilter) : this.orders;
  }
  filteredOrders: IOrder[];
  orders: IOrder[] = [];
  performFilter(filterBy: string): IOrder[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.orders.filter((order: IOrder) => order.orderName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this._orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
        this.filteredOrders = this.orders;
    },
        error => this.errorMessage = <any>error
    );
  }

}
