import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../product/Product';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit , OnDestroy{
  saveProduct: Product[] = [];
  totalCart = 0;
  allPrice: number;
  constructor(private router: Router , private orderService: OrderService,
              private productService: ProductService ,
              private activate: ActivatedRoute) { }

  ngOnInit() {
    this.totalPrice();
  }

  ngOnDestroy() {
    window.localStorage.setItem('saveProduct' , JSON.stringify(this.saveProduct));
  }
  totalPrice() {
  this.saveProduct = JSON.parse(window.localStorage.getItem('saveProduct'));
  for (const product of this.saveProduct) {
   this.totalCart += product.priceProduct;
   product.amount = 1;
   product.total = product.priceProduct;
  }
  this.allPrice = this.totalCart;
  }
  delete(value) {
  this.totalCart = 0 ;
  this.saveProduct.splice(value , 1);
  for (const product of this.saveProduct) {
      this.totalCart += product.total;
  }
  this.allPrice = this.totalCart;
  }
  total(value: number, product: Product) {
    this.totalCart = 0;
    product.amount = value;
    product.total = product.priceProduct * value;
    for (const product1 of this.saveProduct) {
      this.totalCart += product1.total;
    }
    this.allPrice = this.totalCart;
  }
  backToList() {

  }
}
