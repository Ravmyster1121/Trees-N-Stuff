export class Products {
    id: any;
    name: string;
    price: number;
    cardDescr: string;
    pageDescr: string;
    itemType: string;
    thumbnail: string;
    img1: string;
    img2: string;
    img3: string;

    constructor(id: any,
        name: string,
        price: number,
        cardDescr: string,
        pageDescr: string,
        itemType: string,
        thumbnail: string,
        img1: string,
        img2: string,
        img3: string)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.cardDescr = cardDescr;
            this.pageDescr = pageDescr;
            this.itemType = itemType;
            this.thumbnail = thumbnail;
            this.img1 = img1;
            this.img2 = img2;
            this.img3 = img3;
        }
}