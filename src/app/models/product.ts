export class Product {
    prod_id: number;
    prod_name: string;
    prod_description: string;
    prod_price: number;
    prod_imageUrl: string;

    constructor(id, name, description='Description will be updated soon',price, imageUrl="assets/product.png") 
    {
        this.prod_id = id;
        this.prod_name = name;
        this.prod_description = description;
        this.prod_price = price;
        this.prod_imageUrl = imageUrl;

    }
}
