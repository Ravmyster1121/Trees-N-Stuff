import { Component } from '@angular/core';
import { Cart } from '../cart';
import { returnStoreCart } from '../product/product.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent {
  cartItems = Cart;  
}
