import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    {{ products | json }}
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];

  constructor() {}

  ngOnInit() {}
}
