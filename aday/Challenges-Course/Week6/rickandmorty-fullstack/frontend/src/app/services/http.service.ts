import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public srvhttp:HttpClient) { }

  getAPI(url: string):any{
    return this.srvhttp.get(url)
  }
}
