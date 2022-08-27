import { Component, OnInit } from '@angular/core';
import { WishlistItem } from 'src/app/common/wishlist-item';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistItem: WishlistItem[] = [];
  constructor(private wislistservice: WishlistServiceService) { }

  ngOnInit(): void {
    this.listWishlist();
    this.wishlistItem = this.wislistservice.wishlistItem;
  }
  listWishlist() {
    console.log("wishlist working");
  }

}
