import { Injectable } from '@angular/core';
import { Order } from '../models/order'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const apiUrl= 'http://localhost:8080/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // orders: Order[] = [
  //   new Order(1,1,1,100,1),
  //   new Order(2,4,1,1200,1),
  //   new Order(3,2,1,200,1)
  // ];

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(apiUrl);
  }
}
