import { Component } from '@angular/core';
import { Cart } from '../cart';
import { returnPurchaseCart } from '../cart-view/cart-view.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  storeItems = Cart;
}
