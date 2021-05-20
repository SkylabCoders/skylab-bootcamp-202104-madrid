import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  name = 'Willy'

  constructor() { }

  getName():string {
    return this.name;
  }
}
