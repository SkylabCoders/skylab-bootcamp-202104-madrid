import { Pipe, PipeTransform } from '@angular/core';
import { PipeService } from '..//services/pipe.service'

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  constructor(private srv:PipeService) { }

  transform(key: string): any {
    return this.srv.getTrans(key);
  }

}
