import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService
{
    private products: Product[];

    constructor()
    {
        this.products = 
        [
            { productId: "TREE-OAK-SAPLING", productName: "Oak Tree Sapling", productPrice: 25, productImage: "../assets/img/tree.jpg"},
            { productId: "TOOL-HOE", productName: "Gardening Hoe", productPrice: 10, productImage: "../assets/img/hoe.jpg"},
            { productId: "TOOL-AXE", productName: "Wood Axe", productPrice: 10, productImage: "../assets/img/tree.jpg"}
        ]
    }

    findAll(): Product[]
    {
        return this.products;
    }

    find(id: string): Product
    {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string)
    {
        for(var i = 0; i < this.products.length; i++)
        {
            if(this.products[i].productId == id)
            {
                return i;
            }
        }
        return -1;
    }
}