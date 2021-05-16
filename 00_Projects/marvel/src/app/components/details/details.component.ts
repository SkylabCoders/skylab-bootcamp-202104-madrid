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
  constructor (public mainSrv: MainService) {}

  ngOnInit (): void {
    this.mainSrv
      .getAction('getList', URL.apiURL + URL.comicURL)
      .subscribe((res: any) => {
        this.comicList = res.data.results.sort(() => Math.random() - 0.5)
        this.loadSvg = false
        this.comicList = this.comicList.slice(0, 6)
      })
  }
}
