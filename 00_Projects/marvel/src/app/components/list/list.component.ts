import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'
import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   marvelList:Imarvel [] = []
   favoriteList = this.mainSrv.favorites
   loadSvg = true

   constructor (public mainSrv:MainService, public translate: TranslateService, public route:Router) {}

   ngOnInit (): void {
     console.log(this.favoriteList)
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL + URL.offsetAndLimit)).subscribe((res:any) => {
       this.parseData(res.data.results)
       this.loadSvg = false
       this.marvelList = res.data.results
     })

     this.translate.addLangs(['en', 'es'])
     const localLang = localStorage.getItem('lang')
     if (localLang) {
       this.translate.use(localLang)
     }
   }

   parseData (list:Imarvel []) {
     list.map(element => element.selected = false)
   }

   toFavorite (character:Imarvel, event?:MouseEvent) {
     const element:any = event?.target
     element.classList.toggle('fas')
     element.classList.toggle('far')
     character.selected = !character.selected
     if (character.selected) {
       this.favoriteList.push(character)
     } else {
       return this.removeFavorite(character)
     }
   }

   removeFavorite (character:Imarvel) {
     this.favoriteList = this.favoriteList.filter(hero => { return hero.id !== character.id })
     this.mainSrv.favorites = this.favoriteList
   }

   goCharacter (characters:any) {
     this.mainSrv.character = characters
     this.route.navigate(['details'])
   }
}
