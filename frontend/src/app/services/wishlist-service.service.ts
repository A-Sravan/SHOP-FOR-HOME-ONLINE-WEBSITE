import { Injectable } from '@angular/core';
import { WishlistItem } from '../common/wishlist-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  wishlistItem: WishlistItem[] = [];
  constructor() { }

  addToWishlist(wishItem: WishlistItem) {
    this.wishlistItem.push(wishItem);

    console.log(wishItem);
  }
}
