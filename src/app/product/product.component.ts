import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from '../products-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{
  @Input() storeItem;

  constructor(private router: Router){}

  onClick(selectedItem){
    this.router.navigate(['/product-page', selectedItem]);
  }
}
