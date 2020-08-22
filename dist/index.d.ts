import { BasketItem } from "./basket_item";
import { Product } from "./product";
export declare class Basket {
    listItems: BasketItem[];
    totalItems: number;
    constructor(listItems: any);
    getPrice(): number;
    getBasketItems(): BasketItem[];
    addItem(item: BasketItem): void;
    removeItem(prod: Product): void;
}
