import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{
  @Input() storeItem;
  
  constructor(private router: Router){}

  onSelect([storeItem]){
    this.router.navigate(['/product-page', storeItem.id]);
  }
}
