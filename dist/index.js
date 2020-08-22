"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Basket {
    constructor(listItems) {
        this.listItems = listItems;
        this.totalItems = 0;
    }
    getPrice() {
        var items = this.listItems.length;
        var total;
        if (items > 0) {
            this.listItems.forEach(item => {
                total = total + item.product.price;
            });
        }
        return total;
    }
    getBasketItems() {
        return this.listItems;
    }
    addItem(item) {
        this.listItems.push(item);
    }
    removeItem(prod) {
        this.listItems = this.listItems.filter(item => item.product.id === prod.id);
    }
}
exports.Basket = Basket;
