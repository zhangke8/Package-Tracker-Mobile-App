import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    constructor(private http: Http) { }
    private itemUrl = 'http://localhost:8000/api/items';
    getItems() {
        return this.http.get(this.itemUrl)
        .map((response: Response) => response.json());
    }
}
