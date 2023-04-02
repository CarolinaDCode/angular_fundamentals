import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  
  myShoppingCart: Product[] = [];
  total= 0;

  products2: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 111,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 222,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 333,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 444,
      image: './assets/images/books.jpg'
    }
  ];

  /** 
   * Para incluir a este servicio dentro del componente
   * Vamos a crear algo que se llama Inyección de Dependencias
   * constructor(private StoreService: StoreService)
  */
  constructor(private StoreService: StoreService){
    this.myShoppingCart = this.StoreService.getShoppingCart();
  }

  ngOnInit(): void{}

  onAddToShoppingCart(product: Product){
    this.StoreService.addProduct(product);
    this.total = this.StoreService.getTotal();
  }
}
