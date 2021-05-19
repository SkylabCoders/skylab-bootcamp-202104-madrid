import { Pipe, PipeTransform } from '@angular/core';
import { TraduccionService } from './../services/traduccion.service'

@Pipe({
  name: 'ubersetzen'
})
export class UbersetzenPipe implements PipeTransform {

  constructor(public srv:TraduccionService) { }

  transform(expression:string): any {

    return this.srv.getTrans(expression);
    
  }

}
