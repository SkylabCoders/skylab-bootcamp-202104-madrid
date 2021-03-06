import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (public http:HttpClient) {}

  getData (url:string):any {
    return this.http.get(url)
  }
}
