import { Component, OnInit } from '@angular/core'
import { MainService } from '../../services/main.service'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor (private mainSrv:MainService, public translate: TranslateService) { }

  title = 'Your favorite list'
  yourFavorites = this.mainSrv.favorites
  ngOnInit (): void {
    this.translate.addLangs(['en', 'es'])
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      this.translate.use(localLang)
    }
  }
}
