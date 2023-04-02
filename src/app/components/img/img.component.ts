import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img') 
      set changeImg(newImg: string){
        this.img = newImg;
        console.log('Change the img =>', this.img)
      }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-qA-E6jcwhgYe5Nw3ClDO4RqCQuj9Dj9S45wVlzGqeBJmfCuNTgtcBC23Pf9BsAyUoY&usqp=CAU";

  // counter = 0;
  // counterFn : number | undefined;

  constructor() {
    /** 
     * Ciclo de vida de componentes:(1)
     * Before Render
     * No Async
     */
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(changes: SimpleChanges){
  /** 
     * Ciclo de vida de componentes:(2)
     * Before Render
     * Changes Inputs - items
     */
    console.log('ngOnChanges', 'imgValue =>', this.img)
    console.log('changes', changes);
  }

  ngOnInit(): void {
    /** 
     * Ciclo de vida de componentes:(3)
     * Before and During Render, inpect changes
     * Yes Async: fetch Api, Promesas
     * Once time
     */
    console.log('ngOnInit', 'imgValue =>', this.img)

    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }

  ngAfterViewInit() {
    /** 
     * Ciclo de vida de componentes:(4)
     * After Render
     * Handler Child
     */
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    /** 
     * Ciclo de vida de componentes:(5)
     * Delete Component and its instance
     */
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
