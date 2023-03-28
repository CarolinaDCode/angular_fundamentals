import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-qA-E6jcwhgYe5Nw3ClDO4RqCQuj9Dj9S45wVlzGqeBJmfCuNTgtcBC23Pf9BsAyUoY&usqp=CAU";

  constructor() {
    /** Ciclo de vida de componentes:(1)
     * Before Render -> Corre antes del Render
     - Y Al final angular necesita de este componente y crear la instancia de ese componente para reutilizarlo,
     - Es importante que en el constructor no corras cosas asincronas (petición ,fetch, suscripción), solo aquelas a la que le asignas un valor
     inmediato.
     - async corre solo una vez, pero la instancia del constructor se creará cada vez que creemos este componente, entonces No utilizar async.
    */
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(){
      
  }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
