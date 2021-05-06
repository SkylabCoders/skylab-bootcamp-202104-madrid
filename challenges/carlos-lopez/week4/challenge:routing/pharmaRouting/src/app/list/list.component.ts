import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [
    {name: 'PURITO - Limpiador Defence Barrier pH Cleanser 150 ml', price: 11.70, inTheBasket: false},
    {name: 'THE ORDINARY - Niacinamide 10% Zinc 1%', price: 5.75, inTheBasket: false},
    {name: 'iUNIK - Crema en gel calmante con centella 60 ml', price: 9.50, inTheBasket: false},
  ]
  
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
  addToBuy(item:any){
    this.srv.basket.push(item);
  };

}
