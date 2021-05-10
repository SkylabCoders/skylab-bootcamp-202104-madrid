import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'division'
})
export class DivisionPipe implements PipeTransform {

  transform(dividendo: number, divisor: number): string {
    const result = (dividendo+10)/(divisor+10)
    return `El resultado es de la division es: ${result}`
  }

}
