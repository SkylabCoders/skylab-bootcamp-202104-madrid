import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'
import { URL } from '../../models/url'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  MarvelList: Imarvel[] = [];
  randomList: Imarvel[] = [];
  topHeros: Imarvel[] = [];

  constructor (public mainSrv: MainService, public route:Router, public translate: TranslateService) {}

  ngOnInit (): void {
    this.translate.addLangs(['en', 'es'])
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      this.translate.use(localLang)
    }
    this.mainSrv
      .getAction('getList', URL.apiURL + URL.CharactersURL)
      .subscribe((res: any) => {
        this.randomList = res.data.results.sort(() => Math.random() - 0.5)
        for (let i = 0; i < this.randomList.length; i++) {
          if (this.topHeros.length === 4) {
            break
          }
          if (this.randomList[i].thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
            this.topHeros.push(this.randomList[i])
          }
        }
      })
  }

  goCharacter (characters:any) {
    this.mainSrv.character = characters
    this.route.navigate(['details'])
  }
}
