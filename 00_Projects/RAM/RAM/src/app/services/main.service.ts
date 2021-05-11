import { Injectable } from '@angular/core';
import { StorageService } from './storage.service'
import { LoginService } from './login.service'
import { HttpService } from './http.service'



@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentUser = this.srvLogin.currentUser;
  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService ) { }

  getTheAPI(url:string):any {
    return this.srvHttp.getAPI(url)
  }

}
