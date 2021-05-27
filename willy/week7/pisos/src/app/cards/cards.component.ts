import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpService } from '../services/http.service'
import { registerLocaleData } from '@angular/common'
import es from '@angular/common/locales/es'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
cardData:any
nextUrl!:string
cardDataList:Array<{}> = []
currency:string = '€'
squareMeter:string = 'm2'
rooms:string = 'Hab.'

constructor (private httpSvr: HttpService) { }

ngOnInit (): void {
  this.getAllData(environment.apiPisos)
  registerLocaleData(es)
}

getAllData (url:string) {
  const obs$ =
    this.httpSvr.getData(url).subscribe((res:any) => {
      this.cardData = res.data
      this.nextUrl = res.links.next.href
      this.cardDataList.push(...res.data)
      obs$.unsubscribe()
    })
}

showMore () {
  if (this.nextUrl) {
    this.httpSvr.getData(this.nextUrl).subscribe((res:any) => {
      this.nextUrl = res.links.next.href
      this.cardDataList.push(...res.data)
      this.cardData = this.cardDataList
    })
  }
}
}
