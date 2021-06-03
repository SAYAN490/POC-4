import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
    //{id: 1,productId:1, productName:'Headphone', qty:4, price:3000},
    //{id: 2,productId:2, productName:'Headphone', qty:5, price:3000},
    //{id: 3,productId:3, productName:'Headphone', qty:1, price:3000}
  ];

  cartTotal=0
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      //console.log(product)
      this.addProductToCart(product)
    })
  

    
  }

  addProductToCart (product:Product){

    let productExists=false

      for(let i in this.cartItems){
        if(this.cartItems[i].productId==product.prod_id){
          this.cartItems[i].qty++
          productExists=true
          break;
        }
      }

    if(!productExists){
      this.cartItems.push({
            productId:product.prod_id,
            productName: product.prod_name,
            qty:1,
            price: product.prod_price
          })

    }

    // if(this.cartItems.length===0){
    //   this.cartItems.push({
    //     productId:product.id,
    //     productName: product.name,
    //     qty:1,
    //     price: product.price
    //   })

    // }
    // else{
    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].productId==product.id){
    //       this.cartItems[i].qty++
    //       break;
    //     }
    //     else{
    //       this.cartItems.push({
    //         productId:product.id,
    //         productName: product.name,
    //         qty:1,
    //         price: product.price
    //       })
      
    //     }
  
    //   }

    // }

    
    this.cartTotal=0
          this.cartItems.forEach(item=>{
            this.cartTotal+=(item.qty*item.price)
          })

  }

}
