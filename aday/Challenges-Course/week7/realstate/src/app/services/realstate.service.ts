import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RealstateService {
  constructor (private httppClient: HttpClient) { }

  getApi (url: string):any {
    return this.httppClient.get(url)
  }
}
