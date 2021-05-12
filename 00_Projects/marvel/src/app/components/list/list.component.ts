import { Component, OnInit } from '@angular/core'
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
   favorite = false
   favoriteList = this.mainSrv.favorites
   favicon = document.querySelector('.far fa-star')

   constructor (public mainSrv:MainService) {}

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL)).subscribe((res:any) => {
       console.log(res.data.results)
       this.marvelList = res.data.results
     })
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
