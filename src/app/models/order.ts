export class Order {
    order_id: number;
    product_id: number;
    order_qty: number;
    order_amnt: number;
    ship_id: number;


    constructor(order_id,product_id,order_qty,order_amnt,ship_id) {
        this.order_id = order_id;
        this.product_id=product_id;
        this.order_qty = order_qty;
        this.order_amnt = order_amnt;
        this.ship_id = ship_id;
    }

}


