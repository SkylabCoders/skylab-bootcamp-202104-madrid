import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service'
import {LoginService} from '../services/login.service'
import {HttpService} from '../services/http.service'
import { RickMock } from '../services/mocking/interfaceMock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService) {

  }
 

  ngOnInit(): void {

  }

}
