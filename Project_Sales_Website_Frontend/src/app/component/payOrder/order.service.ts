import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  index = 0;
  private ORDER = 'http://localhost:5000/api/auth/order';
  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.ORDER , order);
  }
}
