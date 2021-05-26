import { Component, OnInit } from '@angular/core'
import { HolapisosService } from '../services/holapisos.service'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardData: any
  next!: string
  currency: string = '€'
  previous!: string

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpServices: HolapisosService) { }

  ngOnInit (): void {
    this.fetch(environment.url)
  }

  fetch (url:string) {
    const obs$ = this.httpServices.getData(url)
      .subscribe(
        (res:any) => {
          this.cardData = res.data
          this.next = res.links.next.href
          obs$.unsubscribe()
        }
      )
  }

  nextPage () {
    if (this.next) {
      this.httpServices.getData(this.next).subscribe((res:any) => {
        this.next = res.links.next.href
        this.previous = res.links.prev.href
        this.cardData = res.data
      })
    }
  }

  previousPage () {
    if (this.previous !== environment.startUrl) {
      this.httpServices.getData(this.previous).subscribe((res:any) => {
        this.next = res.links.next.href
        this.previous = res.links.prev.href
        this.cardData = res.data
      })
    } else {
      this.ngOnInit()
    }
  }
}
