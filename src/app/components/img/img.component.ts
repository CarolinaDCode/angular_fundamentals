import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-qA-E6jcwhgYe5Nw3ClDO4RqCQuj9Dj9S45wVlzGqeBJmfCuNTgtcBC23Pf9BsAyUoY&usqp=CAU";

  constructor() {
    /** 
     * Ciclo de vida de componentes:(1)
     * Before Render
     * No Async
     */
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(){
  /** 
     * Ciclo de vida de componentes:(2)
     * Before Render
     * Changes Inputs - items
     */
    console.log('ngOnChanges', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
    /** 
     * Ciclo de vida de componentes:(3)
     * Before and During Render, inpect changes
     * Yes Async: fetch Api, Promesas
     * Once time
     */
    console.log('ngOnInit', 'imgValue =>', this.img)
  }

  ngAfterViewInit() {
    /** 
     * Ciclo de vida de componentes:(4)
     * After Render
     * Handler Child
     */
    console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
