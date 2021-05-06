import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  model = {name:"", price: 0, inTheBasket:false};
  
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
  addToBuy(item:any){
    if(!item.inTheBasket){
      item.inTheBasket = true;
      this.srv.basket.push(item);
      this.srv.total = this.srv.total + item.price;
    }
  }

  onSubmit(){
    let newModel = {...this.model};
    this.srv.products.push(newModel);
  }



}
