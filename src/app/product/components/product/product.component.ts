import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="card">
      <div class="card-header my-2">
        <ng-container *ngIf="details; else link">
          {{ product.name }}
        </ng-container>
        <ng-template #link>
          <a [routerLink]="product.id">{{ product.name }}</a>
        </ng-template>
      </div>
    </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Input() public details: boolean;
  constructor() {}

  ngOnInit() {}
}
