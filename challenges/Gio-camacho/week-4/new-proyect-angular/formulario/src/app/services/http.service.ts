import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private htttp: HttpClient) {
    
   }

   getData(url: string){
     return this.htttp.get(url).toPromise()
   }
}
