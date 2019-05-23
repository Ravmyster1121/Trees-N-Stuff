import { Products } from './products';

export const PRODUCTS : Products[] = [
    {
        id: 0,
        name: "Oak Sapling",
        price: 25,
        cardDescr: "Use on dirt to plant sapling.",
        pageDescr: "Oak saplings can be planted in soft dirt and will eventually grow to full Oak Trees (This can be sped up by using bone meal). Once an Oak Tree has reached maturity it will begin to bear apples as fruit.",
        itemType: "Tree",
        thumbnail: "OakSaplingThumb.png",
        img1: "OakSapling.png",
        img2: "OakTree.png",
        img3: "Apple.png",
    },
    {
        id: 1,
        name: "Hoe",
        price: 10,
        cardDescr: "Use on dirt to till into farmland.",
        pageDescr: "A hoe can be used to till dirt and turn it into farmland so that you can plant crops such as wheat, potatoes, carrots, beetroot, pumpkins and melons.",
        itemType: "Tool",
        thumbnail: "HoeThumb.png",
        img1: "DiamondHoe.png",
        img2: "IronHoe.png",
        img3: "WoodHoe.png",
    },
    {
        id: 2,
        name: "Axe",
        price: 10,
        cardDescr: "Chop wood faster when using an axe.",
        pageDescr: "An axe can be use to chop down trees and break wood much faster than most other tools. Perfect for cutting down trees.",
        itemType: "Tool",
        thumbnail: "AxeThumb.png",
        img1: "DiamondAxe.png",
        img2: "IronAxe.png",
        img3: "WoodAxe.png",
    }
];

