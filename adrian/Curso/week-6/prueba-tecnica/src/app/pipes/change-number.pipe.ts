import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumber'
})
export class ChangeNumberPipe implements PipeTransform {

  transform(value: string | null) {
    if(value){
      return value.replace(",", ".")
    } else {
      return
    }
  }
}
