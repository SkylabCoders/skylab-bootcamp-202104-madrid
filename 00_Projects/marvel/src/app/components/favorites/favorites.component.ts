import { Component, HostListener, OnInit } from '@angular/core'
import { MainService } from '../../services/main.service'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor (private mainSrv:MainService, public translate: TranslateService) { }

  imgSrc = 'https://trello-attachments.s3.amazonaws.com/6098e25224d83a589028906f/430x653/88f99a970ccc135d7d17c5fa248dbb70/stan_lee.png'
  title = 'Your favorite list'
  yourFavorites = this.mainSrv.favorites
  ngOnInit (): void {
    console.log(this.yourFavorites)
    this.translate.addLangs(['en', 'es'])
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      this.translate.use(localLang)
    }
  }

  remove (index:number) {
    if (index > -1) {
      this.yourFavorites.splice(index, 1)
    }
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.imgSrc = 'https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/6098e25224d83a589028906f/dbbc05c631fdbed050b2d732e43f0a12/stan-lee.png'
  }

  @HostListener('mouseout') onMouseOut () {
    this.imgSrc = 'https://trello-attachments.s3.amazonaws.com/6098e25224d83a589028906f/430x653/88f99a970ccc135d7d17c5fa248dbb70/stan_lee.png'
  }
}
