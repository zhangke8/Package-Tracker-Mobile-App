import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class OrderApiService {
    constructor(private http: Http) { }
    private orderUrl = 'http://localhost:8000/api/orders';
    saveOrder(order) {
        return this.http.post(this.orderUrl, order)
        .map((response: Response) => response.json());
    }
    getOrders() {
        return this.http.get(this.orderUrl)
        .map((response: Response) => response.json());
    }
    updateOrder(order, id: string) {
        return this.http.put(this.orderUrl + '/' + id, order)
        .map((response: Response) => response.json());
    }
    deleteOrder(order, id: string) {
        return this.http.delete(this.orderUrl + '/' + id, order)
        .map((response: Response) => response.json());
    }
}
