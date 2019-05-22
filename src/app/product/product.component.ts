import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../products-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{
  @Input() storeItems;
}