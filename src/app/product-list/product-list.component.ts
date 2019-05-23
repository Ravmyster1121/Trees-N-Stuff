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
  
  productsFound = [];

  findProduct(userSearch: string) {
    for(var i = 0; i <= PRODUCTS.length; i++){
      if (PRODUCTS.filter(p => p.name == userSearch))
      {
        this.productsFound.push(PRODUCTS[i]);
      }
    }
    
    this.storeItems = this.productsFound
  }

  // var productId = parseInt(this.route.snapshot.paramMap.get('id'));
  // this.porductsFound[i] = new Products(PRODUCTS[productId].id, PRODUCTS[productId].name, PRODUCTS[productId].price, 
  //   PRODUCTS[productId].cardDescr, PRODUCTS[productId].pageDescr, PRODUCTS[productId].itemType, PRODUCTS[productId].thumbnail, 
  //   PRODUCTS[productId].img1, PRODUCTS[productId].img2, PRODUCTS[productId].img3)

}