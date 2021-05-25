import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardData: any

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
    this.fetch(environment.url)
  }

  fetch (url:string) {
    const obs$ = this.httpClient.get(url)
      .subscribe(
        (res) => {
          this.cardData = res
          console.log(this.cardData)
          obs$.unsubscribe()
        }
      )
  }
}
