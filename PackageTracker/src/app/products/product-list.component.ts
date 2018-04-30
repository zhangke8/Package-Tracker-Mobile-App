import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
//import { ProductService } from './product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  product: IProduct;
  pageTitle = 'Product List';
  imageWidth = 50;
  imagMargin = 2;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  products: IProduct[] = [];

  ngOnInit() {
    console.log("list of products");
  }

}
