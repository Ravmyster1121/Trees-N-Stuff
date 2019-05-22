import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeListComponent } from '../tree-list/tree-list.component'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public productId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
