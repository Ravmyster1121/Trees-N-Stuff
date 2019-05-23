import { Component } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  storeItems = Cart;
}
