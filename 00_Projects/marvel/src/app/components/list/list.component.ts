import { Component, OnInit } from '@angular/core'
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
   favorite = false
   favoriteList = this.mainSrv.favorites
   favicon = document.querySelector('.far fa-star')

   constructor (public mainSrv:MainService, public translate: TranslateService) {
   }

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL)).subscribe((res:any) => {
       console.log(res.data.results)
       this.marvelList = res.data.results
     })

     this.translate.addLangs(['en', 'es'])
     const localLang = localStorage.getItem('lang')
     if (localLang) {
       this.translate.use(localLang)
     }
   }

   toFavorite (character:any) {
     this.favorite = !this.favorite
     if (this.favorite) {
       this.favoriteList.push(character)
       console.log(this.favoriteList)
     } else {
       this.favoriteList.slice(0, 1)
       console.log(this.favoriteList)
     }
   }
}
