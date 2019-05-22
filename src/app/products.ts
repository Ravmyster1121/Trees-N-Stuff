export class Products {
    id: any;
    name: string;
    price: number;
    descr: string;
    img: string;

    constructor(id: any,
        name: string,
        price: number,
        descr: string,
        img: string)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.descr = descr;
            this.img = img;
        }
}