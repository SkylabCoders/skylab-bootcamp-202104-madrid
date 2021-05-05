import { Component, OnInit } from '@angular/core';
import { IshopList } from '../models/interface';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  stockStatus = [true, false]
  
  shopList: IshopList[] = []

  basketList: IshopList[] = []

  model = {product: 'crema', price: 25, stock: true}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(shopForm: NgForm){
    this.shopList = [shopForm.value, ...this.shopList];
    console.log(this.shopList);
  }

  remove(index: number){
    if(index > -1){
      this.shopList.splice(index, 1);
    }
  }

  goBuy(index: number){
    this.basketList.push(this.shopList[index]);
    console.log(this.basketList);
  }
}