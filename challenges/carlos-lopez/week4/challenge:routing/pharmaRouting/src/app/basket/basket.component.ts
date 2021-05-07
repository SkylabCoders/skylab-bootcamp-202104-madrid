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
    for(let i = 0; i < this.srv.basketBackUp.length; i++){
      if(item.name === this.srv.basketBackUp[i].name){
        this.srv.basketBackUp[i].inTheBasket = false;
        this.srv.total = this.srv.total - this.srv.basketBackUp[i].price;
        this.srv.basketBackUp.splice(i, 1);
      };
    };
  };
};
