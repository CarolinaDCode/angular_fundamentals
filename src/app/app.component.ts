import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  imgParent = '';

  showImg = true;

  onLoaded(img: string){
    console.log('log padre', img);
  }

  widthImg = 10;
  name = 'Diana';
  age = 20;
  img = "https://images.hola.com/imagenes/mascotas/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg?tx=w_680";
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name: 'Vanessa',
    age: 32,
    avatar: 'https://hips.hearstapps.com/vidthumb/images/vanessa-hudgens-1670836622.jpg'
  }

  names: string[] = ['Rut', 'Carla', 'Milagros', 'Mayra']
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  headerImg = './assets/images/angular15.png' 
  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
