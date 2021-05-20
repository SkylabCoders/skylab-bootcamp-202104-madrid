import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products'

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.sass']
})
export class ShoppingCarComponent implements OnInit {
  constructor() { }
  listCar:Products[] = []
  ngOnInit(): void {
  }

}
