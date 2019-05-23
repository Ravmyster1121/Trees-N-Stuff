import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { returnStoreCart } from '../product/product.component';
import { Cart } from '../cart';
import { Items } from '../items';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})

export class CartViewComponent{
  @Input() cartItem;

  cartItems = Cart;

  constructor(private router: Router){}

  onClick(selectedItem){
    this.router.navigate(['/product-page', selectedItem]);
  }

  removeItem(selectedItem)
  {
    if(this.cartItems[selectedItem].quantity <= 0)
    {
      this.cartItems[selectedItem].quantity = 0;

      alert('No items to remove!');
    }
    else
    {
      this.cartItems[selectedItem].quantity--;
      
      alert(this.cartItems[selectedItem].quantity);
      alert('Item removed from cart!');
    }

    
  }

  OnInit()
  {
    
  }
}

export function returnPurchaseCart(): Items[]
  {
    return this.cartItems;
  }