import { Component, OnInit } from '@angular/core'
import { ElementArrayFinder } from 'protractor'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   marvelList:Imarvel [] = []
   favoriteList = this.mainSrv.favorites

   constructor (public mainSrv:MainService, public translate: TranslateService) {
   }

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL)).subscribe((res:any) => {
       console.log(res.data.results)
       this.parseData(res.data.results)
       this.marvelList = res.data.results
     })

     this.translate.addLangs(['en', 'es'])
     const localLang = localStorage.getItem('lang')
     if (localLang) {
       this.translate.use(localLang)
     }
   }

   parseData (list:any []) {
     for (let i = 0; i < list.length; i++) {
       list[i].selected = false
     }
   }

   toFavorite (character:any, evt:MouseEvent) {
     const element:any = evt.target
     element.classList.toggle('fas')
     element.classList.toggle('far')
     character.selected = !character.selected
     if (character.selected) {
       this.favoriteList.push(character)
       console.log(this.favoriteList)
     } else {
       return this.removeFavorite(character)
     }
   }

   removeFavorite (character:any) {
     this.favoriteList = this.favoriteList.filter(hero => { return hero.id !== character.id })
     this.mainSrv.favorites = this.favoriteList
     console.log(this.favoriteList)
   }
}
