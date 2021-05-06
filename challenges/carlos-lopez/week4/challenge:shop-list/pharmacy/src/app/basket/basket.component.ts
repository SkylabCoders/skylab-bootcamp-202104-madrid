import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  show = true;
  basket = [{name:'', price:0}];
  newProduct = {name:'', price:0}
  total = 0;
  constructor() { }
  ngOnInit(): void {
  }
  getNewproduct(evt:any){
    this.newProduct.name = evt.name;
    this.newProduct.price = evt.price;
    this.total = this.total + evt.price;
    console.log(this.total)
    let newBla = {...this.newProduct}
    if(this.basket[0].name === ''){
      this.basket.pop();
    }
    this.basket.push(newBla);
  }
  removeFromBasket(selectedProduct:any){
    console.log(this.basket);
    for(let i = 0; i < this.basket.length; i++){
      if(selectedProduct.name === this.basket[i].name){
        this.total = this.total - this.basket[i].price;
        this.basket.splice(i, 1);
        console.log(this.basket);
      }
    }
  }
}
