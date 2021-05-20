import { Injectable } from '@angular/core'
import { LoginService } from './login.service'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentUser = this.srvLogin.currentUser;
  url = 'https://rickandmortyapi.com/api/character?page=1'
  amIInList = false;
  detailsCharacter:any
  favorites:Array<object> = []
  canAddTofavs = false;

  // eslint-disable-next-line no-useless-constructor
  constructor (
    public httpClient:HttpClient,
    public srvLogin: LoginService
  ) { }

  getTheAPI (url:string) {
    return this.httpClient.get(url)
      .pipe(
        catchError(() => of(false))
      )
  }

  goToList (paramUrl:string) {
    this.url = paramUrl
  }
}
