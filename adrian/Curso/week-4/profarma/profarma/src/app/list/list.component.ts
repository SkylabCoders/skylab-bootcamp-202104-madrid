import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComunicationService } from '../services/service/comunication.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() sendItem = new EventEmitter<any>();
products = [
  {name:'crema', price:20, inTheBasket:false},
  {name:'aspirina', price:10, inTheBasket:false},
  {name:'jarabe', price:12, inTheBasket:false},
]
theModel = {name:'jarabe', price:12, inTheBasket:false};

  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
  /*addToBasket(item:any){
    if(item.inTheBasket === false){
      this.sendItem.emit(item);
      item.inTheBasket = true
    }
    console.log(item);
  }*/

  addToBasket(item:any){
    this.srv.item = item;
    
  }
  onSubmit(){
    let model = {...this.theModel};
    this.products.push(model);
  }

}
