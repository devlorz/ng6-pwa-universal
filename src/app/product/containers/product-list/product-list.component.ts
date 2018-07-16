import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .pipe(map(data => data['products']))
      .subscribe(res => (this.products = res));
  }
}
