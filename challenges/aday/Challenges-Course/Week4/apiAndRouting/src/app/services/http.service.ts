import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getData(url: string):any{
    return this.http.get(url)
  //este return es un observable (se utilizan como una promesa)
  //en vez del .then de una promesa, hay que poner un .subscribe
  }
} // Esta clase es un observable: función asíncrona que devuelve un valor
// Al contrario que la promesa, el observable se queda vivo, la promesa se consume
