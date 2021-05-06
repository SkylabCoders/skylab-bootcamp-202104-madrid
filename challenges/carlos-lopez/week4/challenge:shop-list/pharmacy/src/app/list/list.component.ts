import { createNgModule } from '@angular/compiler/src/core';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products = [
    {name: 'PURITO - Limpiador Defence Barrier pH Cleanser 150 ml', price: 11.70, inTheBasket: false},
    {name: 'THE ORDINARY - Niacinamide 10% Zinc 1%', price: 5.75, inTheBasket: false},
    {name: 'iUNIK - Crema en gel calmante con centella 60 ml', price: 9.50, inTheBasket: false},
  ]
  model = {name:"", price: 0, inTheBasket:false};
  
  @Output() productAdded = new EventEmitter<any>();
  constructor(private srv:MainService) { }
  ngOnInit(): void {
  }
  addToTheBasket(item:any){
    this.productAdded.emit(item)
    console.log(item);
  }
  onSubmit(){
    let newModel = {...this.model};
    this.products.push(newModel);
    console.log(this.model)
    console.log(this.products)
  }
}