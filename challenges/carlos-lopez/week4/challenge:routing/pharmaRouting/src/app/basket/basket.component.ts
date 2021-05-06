import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
  removeFromBasket(item:any){
    for(let i = 0; i < this.srv.basket.length; i++){
      if(item.name === this.srv.basket[i].name){
        this.srv.basket[i].inTheBasket = false;
        this.srv.total = this.srv.total - this.srv.basket[i].price;
        this.srv.basket.splice(i, 1);
      };
    };
  };
};
