import { Component, OnInit, Input } from '@angular/core';
import { ComunicationService} from '../services/service/comunication.service'
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  
  basket = [{}];
  /*show = false;
  newProduct = {name:'', price:''}
  total = 0;*/
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {

  }
  /*receivedItem(evt:any){
    this.show = true;
    console.log(evt);
    this.newProduct.name = evt.name;
    this.newProduct.price = evt.price;
    let newNewProduct = {... this.newProduct};
    if(this.basket[0].name === ''){
      this.basket.pop();
    }
    this.basket.push(newNewProduct);
    this.total += evt.price;
  }*/

  recivedItem(item:object){
    this.srv.item = item;
    this.basket.push(item)
    console.log(item);
  }


}
