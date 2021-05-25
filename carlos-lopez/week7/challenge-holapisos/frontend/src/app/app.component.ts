/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { HttpService } from './services/http.service'
import { OnInit, Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fetchFlat$: any;
  results$: any;
  nextUrl!: string;
  constructor (public httpService: HttpService) {}
  title = 'frontend';
  ngOnInit () {
    this.chargePage()
  }

  chargePage () {
    this.httpService.getTheApi().subscribe((res) => {
      this.fetchFlat$ = res
      this.results$ = res.data
      this.nextUrl = res.links.next.href
    })
  }

  getNextPage () {
    if (this.nextUrl) {
      this.httpService.getTheApiNext(this.nextUrl).subscribe((res) => {
        this.fetchFlat$ = res
        this.results$ = this.fetchFlat$.data
        this.nextUrl = res.links.next.href
      })
    }
  }
}
