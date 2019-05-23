import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { returnPurchaseCart } from '../cart-view/cart-view.component';
import { Items } from '../items';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{
  @Input() storeItem;

  storeItems = Cart;

  constructor(private router: Router){}

  onClick(selectedItem){
    this.router.navigate(['/product-page', selectedItem]);
  }

  addItem(selectedItem)
  {
    this.storeItems[selectedItem].quantity++;

    alert(this.storeItems[selectedItem].quantity);
    alert('Item added to cart!');
  }
  
  ngOnInit()
  {
    
  }
}

export function returnStoreCart(): Items[]
  {
    return this.storeItems;
  }