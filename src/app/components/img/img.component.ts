import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input() img: string = 'valor init';

  constructor() {}

  ngOnInit(): void {
  }

}
