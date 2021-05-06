import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IshopList } from '../models/Ilista';
import {EcommerceService} from '../services/ecommerce.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
//@Input () baskList: IshopList[] = []
//@Output () totalPrice = new EventEmitter<number>()





  constructor(public srv:EcommerceService) { }

  ngOnInit(): void {
  }

}
