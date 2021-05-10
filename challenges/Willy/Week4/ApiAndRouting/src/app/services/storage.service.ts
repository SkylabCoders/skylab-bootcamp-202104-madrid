import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get(key:string):any{
    
    let obj = localStorage.getItem(key)//esto devuelve del localstorage la key si existe
    if(obj){
      obj = JSON.parse(obj)
    }
    return obj
  }

  set(key:string, value:Object){
    localStorage.setItem(key, JSON.stringify(value));
  }
}


//if(Object.is(value, Object) || typeof value === 'string') --- control de errores