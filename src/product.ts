export class Product{
    id:string;
    name:string;
    imageUrl:string;
    price:number

    constructor(id,name,price,imageUrl){
        this.id=id;
        this.imageUrl=imageUrl;
        this.name=name;
        this.price=price;
    }
}