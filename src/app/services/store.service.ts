import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

import { Product } from '../models/product.model';

//La libreia rxjs, es la que implemente todo el patron de observables dentro de angular; es algo que viene en el núcleo en las bases del core de angular (los vez en formularios, peticiones http).
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
     return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }
}
