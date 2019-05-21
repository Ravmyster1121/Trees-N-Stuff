import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent {
  storeItems = [
    {
      id: 1,
      name: "Oak Sapling",
      isTree: true,
      itemPrice: 25,
      itemDescr: "Use on dirt to plant sapling.",
      itemImg: "tree.jpg"
    },
    {
      id: 2,
      name: "Hoe",
      isTree: false,
      itemPrice: 10,
      itemDescr: "Use on dirt to till into farmland.",
      itemImg: "hoe.png"
    },
    {
      id: 3,
      name: "Axe",
      isTree: false,
      itemPrice: 10,
      itemDescr: "Chop wood faster when using an axe.",
      itemImg: "axe.png"
    }
  ];
}
