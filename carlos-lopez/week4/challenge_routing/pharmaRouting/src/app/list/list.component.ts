import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  model = {name:"", price: 0, inTheBasket:false};
  basketPrueba: Array <{name:string, price:number, inTheBasket:boolean}> = this.srv.basketBackUp;
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
 

  addToBuy(item:any){
    if(!item.inTheBasket){
      this.basketPrueba.push(item);
      // item.inTheBasket = true;
      // this.srv.basket.push(item);
      this.srv.total = this.srv.total + item.price;
    }
  }

  onSubmit(){
    let newModel = {...this.model};
    this.srv.products.push(newModel);
  }
  ngOnDestroy():void {
    if(this.basketPrueba.length > 0){
      this.srv.basketBackUp = this.basketPrueba;
    }
  }



}
