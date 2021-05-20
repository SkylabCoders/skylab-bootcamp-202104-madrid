import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'division'
})
export class DivisionPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(dividen: number, divisor: number): number {
  //   return dividen/divisor;
  // }

  transform(dividen: number, divisor: number): string {
    const result = dividen/divisor;
    return `El resultado es ${result}`
  }

}
