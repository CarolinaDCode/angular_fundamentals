import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /**
   * HttpClient: Servicio propio de Angualar para hacer request
   * Y si es un Servicio entonces podemos hacer inyección de dependencias
   */
  constructor(private http: HttpClient) {
  }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
