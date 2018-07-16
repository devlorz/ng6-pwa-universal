import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(private service: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getProduct(route.paramMap.get('id'));
  }
}
