import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  storeItems = PRODUCTS;

  constructor(private router: Router){}

  onSelect([storeItem]){
    this.router.navigate(['/product-page', storeItem.id]);
  }
}
