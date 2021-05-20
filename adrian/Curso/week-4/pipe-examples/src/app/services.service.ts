import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  food:any = {
    cat: 'gat',  
    mano: 'man', 
    cabeza: 'cap', 
    tocino:'cansalada'
  };

  palabraTraducida: any;
  constructor() { }
  transFood(propiedad:string){
  return this.food[propiedad];
  }
}
