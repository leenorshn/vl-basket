import {BasketItem} from "./basket_item"
import {Product} from "./product"

export class Basket{
     listItems:BasketItem[];
     totalItems:number;
    constructor(listItems){
        this.listItems=listItems;
        this.totalItems=0
    }


    getPrice():number{
      var items=  this.listItems.length;
      var total=0
      if(items>0){
          this.listItems.forEach(item=>{
              total= total+item.product.price;
          });
      }
      return total;
    }

    getBasketItems():BasketItem[]{
        return this.listItems;
    }

    addItem(item:BasketItem){
        this.listItems.push(item);
    }
    removeItem(prod:Product){
        this.listItems=this.listItems.filter(item=>item.product.id===prod.id);
    }

}



