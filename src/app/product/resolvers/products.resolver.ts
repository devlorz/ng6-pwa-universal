import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private service: ProductService) {}

  resolve() {
    return this.service.getProducts();
  }
}
