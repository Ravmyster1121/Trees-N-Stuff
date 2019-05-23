export class Products {
    id: any;
    name: string;
    price: number;
    cardDescr: string;
    thumbnail: string;
    img1: string;
    img2: string;
    img3: string;

    constructor(id: any,
        name: string,
        price: number,
        cardDescr: string,
        thumbnail: string,
        img1: string,
        img2: string,
        img3: string)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.cardDescr = cardDescr;
            this.thumbnail = thumbnail;
            this.img1 = img1;
            this.img2 = img2;
            this.img3 = img3;
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