/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { HttpService } from './service/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fetch: any
  results: any
  nextUrl!: string

  constructor (public httpService: HttpService) { }

  ngOnInit () {
    this.chargePage()
  }

  chargePage () {
    this.httpService.getApi().subscribe((res) => {
      this.fetch = res
      this.results = this.fetch.data
      this.nextUrl = this.fetch.links.next.href
    })
  }

  showMore () {
    if (this.nextUrl) {
      this.httpService.getApiMostrar(this.nextUrl).subscribe((res) => {
        this.fetch = res
        this.results = this.fetch.data
        this.nextUrl = this.fetch.links.next.href
      })
    }
  }
}
