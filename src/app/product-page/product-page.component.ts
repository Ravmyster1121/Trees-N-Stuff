import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../products-data'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public productsList;
  public productId;
  public productName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsList = PRODUCTS;
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productName = PRODUCTS[this.productId].name;
  }
}
