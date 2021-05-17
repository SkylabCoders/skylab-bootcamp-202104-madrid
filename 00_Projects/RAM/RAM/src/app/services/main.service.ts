import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  currentUser = this.srvLogin.currentUser;
  url = "https://rickandmortyapi.com/api/character?page=1"
  amIInList = false;
  detailsCharacter:any
  favorites:Array<object> = []
  canAddTofavs = false;
  
  constructor(public srvHttp:HttpService, public srvLogin: LoginService ) { }

  getTheAPI(url:string):any {
    return this.srvHttp.getAPI(url)
  }

  goToList(paramUrl:string){
    this.url = paramUrl;
  }

}
