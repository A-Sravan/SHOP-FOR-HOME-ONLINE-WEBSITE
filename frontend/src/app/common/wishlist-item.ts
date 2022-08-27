import { Product } from "./product";
export class WishlistItem {
    id: string;
    name: string;
    imageUrl: string;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
    }
}
