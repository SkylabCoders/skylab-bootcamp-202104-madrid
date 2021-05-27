import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaToDot'
})
export class CommaToDotPipe implements PipeTransform {

  transform(value: string | null) {
    if(value){
      return value.replace(",", ".")
    } else {
      return
    }
  }

}
