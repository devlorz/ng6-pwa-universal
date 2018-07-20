import { UiService } from './../../../ui/services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['products']),
        tap(products => this.metaData(products))
      )
      .subscribe(res => (this.products = res));
  }

  metaData(products: Product[]) {
    this.ui.setMetaData({
      title: 'Products',
      description: `Check out our collection of ${products.length} products`
    });
  }
}
