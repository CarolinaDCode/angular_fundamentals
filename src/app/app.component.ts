import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Diana';
  age = 20;
  img = 'https://images.hola.com/imagenes/mascotas/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg?tx=w_680';
  btnDisabled = true;
  person = {
    name: 'Vanessa',
    age: 32,
    avatar: 'https://hips.hearstapps.com/vidthumb/images/vanessa-hudgens-1670836622.jpg'
  }
}
