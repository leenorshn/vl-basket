import {Product} from "./product"


export class BasketItem{
    product:Product;
    count:number
    constructor(product,count){
        this.product=product,
        this.count=count;
    }
}
