import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})

export class CartViewComponent{
  @Input() cartItem;

  removeItem(selectedItem)
  {
    if(this.cartItem[selectedItem].product.quantity > 0)
    {
      this.cartItem[selectedItem].product.quantity--;

      alert('Item has been removed from cart!');
    }
    else
    {
      this.cartItem[selectedItem].product.quantity = 0;

      alert('There are no items to remove!');
    }
    
  }
}
