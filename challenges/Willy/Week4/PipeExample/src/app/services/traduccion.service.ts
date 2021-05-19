
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TraduccionService {

 readonly obj:any = {
cat: 'gato',
hand: 'mano' 
}
palabraTraducida:any;

constructor () {}

getTrans(palabra:string) {
  this.palabraTraducida = this.obj[palabra]
  return this.palabraTraducida
}
}


