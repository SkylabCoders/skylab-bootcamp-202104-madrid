import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (private httpSrv:HttpClient) { }

  getData (url:string) {
    return this.httpSrv.get(url)
  }
}
