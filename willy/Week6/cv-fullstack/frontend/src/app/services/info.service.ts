import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import Info from '../models/info'

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor (private httpSvr: HttpClient) { }

  getData (url:string):any {
    return this.httpSvr.get(url)
  }

  addData (url:string, body:string):any {
    return this.httpSvr.post(url, body)
  }

  updateData (url:string, body:string):any {
    return this.httpSvr.put(url, body)
  }

  deleteData (url:string):any {
    return this.httpSvr.delete(url)
  }
}
