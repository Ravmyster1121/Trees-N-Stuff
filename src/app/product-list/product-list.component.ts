import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  storeItems = [
    {
      id: 1,
      name: "Oak Sapling",
      itemPrice: 25,
      itemDescr: "Use on dirt to plant sapling.",
      itemImg: "tree.jpg"
    },
    {
      id: 2,
      name: "Hoe",
      itemPrice: 10,
      itemDescr: "Use on dirt to till into farmland.",
      itemImg: "hoe.png"
    },
    {
      id: 3,
      name: "Axe",
      itemPrice: 10,
      itemDescr: "Chop wood faster when using an axe.",
      itemImg: "axe.png"
    }
  ];
}
