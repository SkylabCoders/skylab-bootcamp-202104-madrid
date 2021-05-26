/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string = environment.apiUrl
  constructor (private httpClient: HttpClient) { }

  getApi ():Observable<{}> {
    return this.httpClient.get(this.url)
  }

  getApiMostrar (url:string):Observable<{}> {
    return this.httpClient.get(url)
  }
}
