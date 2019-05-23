import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})

export class CartViewComponent{
  @Input() cartItem;

  constructor(private router: Router){}

  onClick(selectedItem){
    this.router.navigate(['/product-page', selectedItem]);
  }
}
