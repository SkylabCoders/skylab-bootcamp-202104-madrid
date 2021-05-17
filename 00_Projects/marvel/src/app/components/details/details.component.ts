import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { URL } from '../../models/url'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  loadSvg = true
  comicList:any
  hero: any = this.mainSrv.character;
  description: string = 'Description';
  comicText: string = 'Comics';
  limit: string = '&limit=100'
  constructor (public mainSrv: MainService) {}

  ngOnInit (): void {
    const obs$ = this.mainSrv
      .getAction('getList', URL.apiURL + URL.comicURL + this.limit)
      .subscribe((res: any) => {
        this.loadSvg = false
        this.comicList = res.data.results.sort(() => Math.random() - 0.5)
        this.comicList = res.data.results.filter((comic:any) =>
          comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
        this.comicList = this.comicList.slice(0, 6)
        obs$.unsubscribe()
      })
  }
}
