import { Component, OnInit } from '@angular/core';
import { IItem } from '../items/item';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  product: IItem;
  pageTitle = 'Product List';
  imageWidth = 50;
  imagMargin = 2;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductApiService
  ) { }
  
  data: IItem[] = [];
  ngOnInit() {
    this.product = { _id: null, name : '', price: null, imageUrl: '', quantity: null, added: null};
    this._productService.getItems().subscribe(data => this.data = data);
  }

}