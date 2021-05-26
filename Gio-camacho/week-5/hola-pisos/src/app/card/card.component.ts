import { Component, OnInit } from '@angular/core'
import { HolapisosService } from '../services/holapisos.service'
import { environment } from '../../environments/environment'
import { registerLocaleData } from '@angular/common'
import es from '@angular/common/locales/es'

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
  moreInfo:Array<{}> = []
  /* I could not find any solution at the momment, I am work on it */
  bolt: string = 'https://inmueble.s3.eu-west-1.amazonaws.com/fotos_inmuebles/5/0/4/6/5046650.pdf'
  length: any = length - 1

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpServices: HolapisosService) { }

  ngOnInit (): void {
    this.fetch(environment.url)
    registerLocaleData(es)
  }

  fetch (url:string) {
    const obs$ = this.httpServices.getData(url)
      .subscribe(
        (res:any) => {
          this.cardData = res.data
          this.next = res.links.next.href
          this.moreInfo.push(...res.data)
          obs$.unsubscribe()
        }
      )
  }

  showMore () {
    if (this.next) {
      this.httpServices.getData(this.next).subscribe((res:any) => {
        this.next = res.links.next.href
        this.previous = res.links.prev.href
        // this.tito.push(...this.cardData)
        this.moreInfo.push(...res.data)
        this.cardData = this.moreInfo
        // console.log(this.cardData)
        // console.log(this.moreInfo)
      })
    }
  }
}
