import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class ProductApiService {
    private productUrl = 'http://localhost:8000/api/items';
    data: any = {};

    constructor(private http: Http) { 
        this.getItem();
        this.getItems();
    }
    
    getItems() {       
        return this.http.get(this.productUrl).map((response: Response) => response.json());
    }

    getItem() {
        this.getItems().subscribe(data => {
            this.data = data;
        })
    }
}