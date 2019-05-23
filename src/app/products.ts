export class Products {
    id: any;
    name: string;
    price: number;
    descr: string;
    img: string;
    quantity: number;

    constructor(id: any,
        name: string,
        price: number,
        descr: string,
        img: string,)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.descr = descr;
            this.img = img;
        }
}



    function addItem(): void {
        this.quantity++;
    }
    
    function removeItem(): void {
        if(this.quantity !< 0)
        {
            this.quantity = 0;
        }
        else
        {
            this.quantity--;
        }
    }