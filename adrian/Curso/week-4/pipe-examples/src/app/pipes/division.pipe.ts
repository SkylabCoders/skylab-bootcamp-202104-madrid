import { Pipe, PipeTransform } from '@angular/core';
import { ServicesService } from '../services.service';

@Pipe({
  name: 'division'
})

export class DivisionPipe implements PipeTransform {
 
  constructor(private srv: ServicesService) {};
  transform(dividend:number, divisor:number) {
    const result =( dividend/divisor)
    return `el resultado de la division es: ${result}` ;
  }

}
