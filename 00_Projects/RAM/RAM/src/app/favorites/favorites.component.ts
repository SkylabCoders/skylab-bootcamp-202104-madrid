import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service'
import {LoginService} from '../services/login.service'
import {HttpService} from '../services/http.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  
  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService){

  }

  ngOnInit(): void {
  }

}
