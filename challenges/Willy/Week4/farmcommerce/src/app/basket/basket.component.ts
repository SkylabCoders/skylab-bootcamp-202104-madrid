import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IshopList } from '../models/Ilista';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
@Input () baskList: IshopList[] = []
@Output () totalPrice = new EventEmitter<number>()





  constructor() { }

  ngOnInit(): void {
  }

}
