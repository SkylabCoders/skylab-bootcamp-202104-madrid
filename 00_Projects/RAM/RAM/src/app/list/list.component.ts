import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service'
import {LoginService} from '../services/login.service'
import {HttpService} from '../services/http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService){

  }

  ngOnInit(): void {
  }

}
