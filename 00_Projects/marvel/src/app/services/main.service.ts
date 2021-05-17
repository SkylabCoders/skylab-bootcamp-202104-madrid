import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
import { StorageService } from './storage.service'
import { Imarvel } from '../models/Imarvel'
import { User } from '../models/Iusers'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  character:any;
  favorites:Imarvel [] = [];
  userData:any

  constructor (public http:HttpService, public storageSrv:StorageService) { }

  getAction (action:string, param:string) {
    let result
    if (action) {
      result = this.http.getData(param)
    }
    return result
  }
}
