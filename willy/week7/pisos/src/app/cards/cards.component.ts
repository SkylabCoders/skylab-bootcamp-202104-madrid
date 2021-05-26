import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
cardData:any
nextUrl!:string
prevUrl!:string

constructor (private httpSvr: HttpService) { }

ngOnInit (): void {
  this.getAllData(environment.apiPisos)
}

getAllData (url:string) {
  const obs$ =
    this.httpSvr.getData(url).subscribe((res:any) => {
      this.cardData = res.data
      this.nextUrl = res.links.next.href
      obs$.unsubscribe()
    })
}

nextPage () {
  if (this.nextUrl) {
    this.httpSvr.getData(this.nextUrl).subscribe((res:any) => {
      this.nextUrl = res.links.next.href
      this.prevUrl = res.links.prev.href
      this.cardData = res.data
    })
  }
}

prevPage () {
  if (this.prevUrl !== environment.startUrl) {
    this.httpSvr.getData(this.prevUrl).subscribe((res:any) => {
      this.nextUrl = res.links.next.href
      this.prevUrl = res.links.prev.href
      this.cardData = res.data
    })
  } else {
    this.ngOnInit()
  }
}
}
