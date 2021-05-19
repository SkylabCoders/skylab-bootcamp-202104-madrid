import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }
  
  getData(url:string):any{
    return this.http.get(url) 
    /** 
     *  Esto se llama observable. Es una funcion asincrona que devuelve algo. 
     *  Se ejecutan con .subscribe
    */
    
  }
}
