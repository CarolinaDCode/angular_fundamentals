import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-qA-E6jcwhgYe5Nw3ClDO4RqCQuj9Dj9S45wVlzGqeBJmfCuNTgtcBC23Pf9BsAyUoY&usqp=CAU";

  constructor() {}

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
