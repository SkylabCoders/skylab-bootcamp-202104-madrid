import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeService {

dictionary: any = {
  gat: 'gato',
  dog: 'perro',
  dolphin: 'delfin'
}

traduccion:string | undefined;

  constructor() { }

  public getTrans(pal:string){
    this.traduccion = this.dictionary[pal];
    return this.traduccion
  }
}
