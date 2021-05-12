import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  character:any;
  constructor (public http:HttpService, public storageSrv:StorageService) { }

  getAction (action:string, param:any) {
    let result
    switch (action) {
      case 'getList':
        result = this.http.getData(param)
        break
    }
    return result
  }
}
