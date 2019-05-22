import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { PRODUCTS } from '../products-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  storeItems = PRODUCTS;
}
