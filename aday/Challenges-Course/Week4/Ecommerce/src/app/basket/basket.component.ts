import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IshopList } from '../models/interface';
import {EcommerceService} from '../service/ecommerce.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  // @Output() totalPrice = new EventEmitter<number>();
  // @Input() basketList: IshopList[] = [];

  constructor(public srv:EcommerceService) { }

  ngOnInit(): void {
  }

  payYourBills(){

  }

}
