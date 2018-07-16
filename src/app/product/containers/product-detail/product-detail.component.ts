import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <app-product [product]="product" [details]="true"></app-product>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.service
      .getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => (this.product = res));
  }
}
