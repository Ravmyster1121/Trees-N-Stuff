import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { PRODUCTS } from '../products-data'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedProduct: Products;

  constructor(private route: ActivatedRoute) { }

  //Retreives all of the relevant data for the selected product item
  ngOnInit() {
    var productId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.selectedProduct = new Products(PRODUCTS[productId].id, PRODUCTS[productId].name, PRODUCTS[productId].price, 
      PRODUCTS[productId].cardDescr, PRODUCTS[productId].pageDescr, PRODUCTS[productId].itemType, PRODUCTS[productId].thumbnail, 
      PRODUCTS[productId].img1, PRODUCTS[productId].img2, PRODUCTS[productId].img3)
  }
}
