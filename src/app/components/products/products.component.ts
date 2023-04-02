import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  
  myShoppingCart: Product[] = [];
  total= 0;

  products2: Product[] = [];

  /** 
   * Para incluir a este servicio dentro del componente
   * Vamos a crear algo que se llama Inyección de Dependencias
   * private StoreService: StoreService -> no es Asincrono, por eso 
   * si lo podemos realizar desde el contructor.
   * private productsService: productsService -> Si es Asincrono, porque realiza
   * una petición a un servidor, por eso no estará en el constructor
   * 
  */
  constructor(
    private StoreService: StoreService,
    private productsService: ProductsService
    ){
    this.myShoppingCart = this.StoreService.getShoppingCart();
  }

  /**
   * private productsService: productsService -> Si es Asincrono,
   * por eso se realizará en ngOnInit.
   * Angular maneja un patrón llamado Observables
   * Asi que para obtener los datos de la api, vamos a tener que correr una
   * opción llamada 'subscribe'.
   */
  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products2 = data;
    });
  }


  onAddToShoppingCart(product: Product){
    this.StoreService.addProduct(product);
    this.total = this.StoreService.getTotal();
  }
}
