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
   limit: string = '&limit=100'

   constructor (public mainSrv:MainService, public translate: TranslateService, public route:Router) {}

   ngOnInit (): void {
     const obs$ = this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL + this.limit))
       .subscribe((res:any) => {
         this.parseData(res.data.results)
         console.log(this.favoriteList)
         this.marvelList = res.data.results.filter(
           (hero:any) => hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
        hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
         )

         this.loadSvg = false
         this.marvelList.map((hero:Imarvel) => {
           if (hero.description === '') {
             hero.description = 'Ooops! We are very sorry! This super hero does not have a description available at this time.'
           }
           return hero.description
         })
         obs$.unsubscribe()
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

   toFavorite (character:any, event?:MouseEvent) {
     const element:any = event?.target
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

   removeFavorite (character:Imarvel) {
     this.favoriteList = this.favoriteList.filter(hero => { return hero.id !== character.id })
     this.mainSrv.favorites = this.favoriteList
     console.log(this.favoriteList)
   }

   goCharacter (characters:any) {
     this.mainSrv.character = characters
     this.route.navigate(['details'])
   }
}
