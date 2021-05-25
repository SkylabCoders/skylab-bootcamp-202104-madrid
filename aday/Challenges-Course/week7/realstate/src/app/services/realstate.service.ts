import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RealstateService {
  constructor (private httppClient: HttpClient) { }

  getApi (url: string):any {
    return this.httppClient.get(environment.urlApi)
  }
}
