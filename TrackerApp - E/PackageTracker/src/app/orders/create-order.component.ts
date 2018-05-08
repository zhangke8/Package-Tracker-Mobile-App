import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { OrderApiService } from './orderApi.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: IOrder;
  constructor(private _apiService: OrderApiService) { }
  errorMessage: string;
  data: IOrder[] = [];
  submit = true;
  ngOnInit() {
    console.log('run in create order');
    this.submit = true;
    this.order = {_id: '', orderName : '', trackerId: '', price: null, imageUrl: ''};
    this._apiService.getOrders().subscribe(data => this.data = data);
  }

  onSave(order) {
    console.log('save');
    if (this.submit) {
      this._apiService.saveOrder(order).subscribe(data => {
        console.log('data onSave' + JSON.stringify(data.data));
        alert(data.data);
        this.ngOnInit();
       },
       error => this.errorMessage = error
     );
    } else {
      alert(this.order._id);
      this._apiService.updateOrder(order, this.order._id).subscribe(data => {
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
    this.order.orderName = order.orderName;
    this.order.price = order.price;
    this.order.trackerId = order.trackerId;
    this.order.imageUrl = order.imageUrl;
    this.submit = false;
  }

  onDelete(order, id: string) {
    this._apiService.deleteOrder(order, id).subscribe(data => {
      console.log('data onDelete' + JSON.stringify(data.data));
      alert(data.data);
      this.ngOnInit();
     },
     error => this.errorMessage = error
    );
  }
}
