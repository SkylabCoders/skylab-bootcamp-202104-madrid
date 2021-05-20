import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // eslint-disable-next-line no-useless-constructor
  constructor (public srvhttp:HttpClient) { }

  getAPI (url: string):any {
    return this.srvhttp.get(url)
  }
}
