import { PRODUCTS } from './products-data';
import { Items } from './items';

export var Cart: Items[] = [{
        product: PRODUCTS[0],
        quantity: 0
    },
    {
        product: PRODUCTS[1],
        quantity: 0
    },
    {
        product: PRODUCTS[2],
        quantity: 0
    }];

function addItem(id: number)
{
    Cart[id].quantity++;
}

function removeItem(id: number)
{
    if(Cart[id].quantity > 0)
    {
        Cart[id].quantity--;
    }
    else
    {
        Cart[id].quantity = 0;
    }
}