import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(res => (this.products = res));
  }
}
