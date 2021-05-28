/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (private httpClient: HttpClient) { }

  getTheApi ():Observable<any> {
    return this.httpClient.get(environment.realEstateApiUrl)
  }

  getTheApiNext (url:string):Observable<any> {
    return this.httpClient.get(url)
  }
}
