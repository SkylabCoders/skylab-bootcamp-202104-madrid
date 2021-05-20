import { Pipe, PipeTransform } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {

  constructor(private srv:ServicesService) {};

  transform(word:string) {
    return this.srv.transFood(word)
  }
}
