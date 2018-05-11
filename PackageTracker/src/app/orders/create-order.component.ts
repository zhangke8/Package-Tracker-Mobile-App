import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { OrderService } from './order.service';
import { ItemService } from '../items/item.service';
import { IItem } from '../items/item';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: IOrder;
  constructor(private orderService: OrderService, private itemService: ItemService) { }
  errorMessage: string;
  itemList: IItem[] = [];
  orderList: IOrder[] = [];
  productList: any = {};
  total: number;
  submit = true;
  ngOnInit() {
    this.total = 0;
    this.submit = true;
    this.order = {_id: '', trackerId: '', price: null, orderItems: null};
    // this.orderService.getOrders().subscribe(data => this.orderList = data);
    this.itemService.getItems().subscribe(data => this.itemList = data);
  }
  onSave(order) {
    const stringifiedOrder = JSON.stringify(order);
    const parsedOrder = JSON.parse(stringifiedOrder);
    parsedOrder.price = this.total;
    parsedOrder.orderItems = this.productList;
    if (this.submit) {
      this.orderService.saveOrder(parsedOrder).subscribe(data => {
        console.log('data onSave' + JSON.stringify(data.data));
        alert(data.data);
        this.ngOnInit();
       },
       error => this.errorMessage = error
     );
    } else {
      alert(this.order._id);
      this.orderService.updateOrder(order, this.order._id).subscribe(data => {
        console.log('data onUpdate' + JSON.stringify(data.data));
        alert(data.data);
        this.ngOnInit();
       },
       error => this.errorMessage = error
      );
    }
  }
  onEdit(order) {
    this.order._id = order._id;
    this.order.price = order.price;
    this.total = order.price;
    this.order.trackerId = order.trackerId;
    this.submit = false;
  }

  onDelete(order, id: string) {
    this.orderService.deleteOrder(order, id).subscribe(data => {
      console.log('data onDelete' + JSON.stringify(data.data));
      alert(data.data);
      this.ngOnInit();
     },
     error => this.errorMessage = error
    );
  }

  addItem(item) {
    this.total += item.price;
    this.total = Number(this.total.toFixed(2));
    if (this.productList.hasOwnProperty(item._id)) {
      this.productList[item._id] += 1;
       item.added += 1;
    } else {
      this.productList[item._id] = 1;
       item.added += 1;
    }
  }

  removeItem(item) {
    if (this.productList.hasOwnProperty(item._id)) {
      if (this.productList[item._id] > 0) {
        this.productList[item._id] -= 1;
        this.total -= item.price;
        this.total = Number(this.total.toFixed(2));
         item.added -= 1;
      }
    }
  }
}
