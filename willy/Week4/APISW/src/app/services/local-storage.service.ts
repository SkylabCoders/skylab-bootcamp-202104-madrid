import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 
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