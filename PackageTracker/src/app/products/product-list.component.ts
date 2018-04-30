import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
//import { ProductService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imagMargin = 2;
  errorMessage: string;
  /*constructor(private _orderService: ProductService) { }
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }*/
  products: IProduct[] = [];

  ngOnInit() {
    /*this.ProductService.getOrders().subscribe(
      products => {
        this.products = products;
      },
        error => this.errorMessage = <any>error
    );*/
  }
}
