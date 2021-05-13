import { Component, OnInit } from '@angular/core'
import { ElementArrayFinder } from 'protractor'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   title:string = 'Character list'
   marvelList:Imarvel [] = []
   // deleteFavorite:Imarvel [] = []
   favorite = false
   favoriteList = this.mainSrv.favorites
   favicon = document.querySelector('.far fa-star')

   constructor (public mainSrv:MainService) {}

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL)).subscribe((res:any) => {
       console.log(res.data.results)
       this.parseData(res.data.results)
       this.marvelList = res.data.results
     })
   }

   parseData (list:any []) {
     for (let i = 0; i < list.length; i++) {
       list[i].selected = false
     }
   }

   toFavorite (character:any, index:number, evt:MouseEvent) {
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
