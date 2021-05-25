/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { HttpService } from './services/http.service'
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (public httpService: HttpService) {}
  title = 'frontend';
  ngOnInit () {
    this.httpService.getTheApi()
  }
}
