import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HolapisosService {
  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  getData (url:string) {
    return this.httpClient.get(url)
  }
}
