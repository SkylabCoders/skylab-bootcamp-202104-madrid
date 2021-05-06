import { Component, OnInit } from '@angular/core';
import { IshopList } from '../models/Ilista';
import {NgForm} from '@angular/forms';
import {EcommerceService} from '../services/ecommerce.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  stockStatus = [true, false]
  shopList: IshopList[] = []
  model = {product: 'crema', price: 25, stock: true}
  //basketList: IshopList[] = [];
  constructor(private srv:EcommerceService) { }
  ngOnInit(): void {
  }
  onSubmit(shopForm:NgForm){
    this.shopList = [shopForm.value,...this.shopList]
    console.log(this.shopList);
  }

  remove(index:number){
      if(index > -1){
        this.shopList.splice(index,1)
      }
    }

    goBuy(index:number){
      
      this.srv.basketList.push(this.shopList[index])
      console.log(this.srv.basketList)
    }

  }



