import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import{ Order } from 'src/app/models/order'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: Order[]=[]

  //Dependency Injection
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

    this.orderService.getOrders().subscribe((orders)=>{
      this.orderList = orders;
      console.log(this.orderList)
    })
  }

}
