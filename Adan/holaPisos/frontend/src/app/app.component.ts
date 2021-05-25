/* eslint-disable no-useless-constructor */
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { HttpService } from './service/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  fetch: any

  constructor (public httpService: HttpService) { }

  ngOnInit () {
    this.httpService.getApi().subscribe((res) => {
      this.fetch = res
    })
  }
}
