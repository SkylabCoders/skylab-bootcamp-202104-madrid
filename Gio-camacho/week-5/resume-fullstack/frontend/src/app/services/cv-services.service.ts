import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CvServicesService {
  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  getData (url:string):any {
    return this.httpClient.get(url)
  }

  postData (url:string, description: string):any {
    return this.httpClient.post(url, description)
  }

  putData (url:string, description: string):any {
    return this.httpClient.put(url, description)
  }

  deleteData (url:string):any {
    return this.httpClient.delete(url)
  }
}
