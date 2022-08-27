import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  products: Product[] = [];
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  discountCoupon: string = "C3BATCH2";
  clicked = false;
  discountapplied: boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  applyDiscount(disCoupon) {
    this.clicked = true;
    if (disCoupon === this.discountCoupon) {
      this.totalPrice = this.totalPrice * 0.5;
      this.discountapplied = true;
    } else {
      this.discountapplied = false;
    }
  }


  quantity: number=1;
  i=1
  plus(){
    if(this.i!=10){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i!=1){
      this.i--;
      this.quantity=this.i;
    }
  }
}
