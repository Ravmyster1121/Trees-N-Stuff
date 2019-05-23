import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  storeItems = PRODUCTS;

  prevSearch = [];

  searchProduct(userSearch: string) {
    if (userSearch) {
      this.prevSearch.push(userSearch);
      if(this.prevSearch.length > 3){
        this.prevSearch.shift()
      }   
    }
  }
}