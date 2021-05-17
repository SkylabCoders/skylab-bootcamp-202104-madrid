import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'
import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router'
import { FavoritesComponent } from '../favorites/favorites.component'
import { isObservable } from 'rxjs'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   marvelList:Imarvel [] = []
   favoriteList = this.mainSrv.favorites
   isInFavorites = false
   offsetValue = 0;
   limitValue = 100;
   loadGif = true
   constructor (public mainSrv:MainService, public translate: TranslateService, public route:Router) {}

   ngOnInit (): void {
    const obs$ = this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL +  URL.limit + this.limitValue + URL.offset + this.offsetValue))
      .subscribe((res:any) => {
        this.parseData(res.data.results)
        console.log(this.favoriteList)
        this.marvelList = res.data.results.filter(
          (hero:any) => hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
       hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
        this.loadGif = false
        this.marvelList.map((hero:Imarvel) => {
          if (hero.description === '') {
            hero.description = 'Ooops! We are very sorry! This super hero does not have a description available at this time.'
          }
          return hero.description
        })
        obs$.unsubscribe()
        this.pintarEstrellitas()
        
      })

     this.translate.addLangs(['en', 'es'])
     const localLang = localStorage.getItem('lang')
     if (localLang) {
       this.translate.use(localLang)
     }
    }

   pintarEstrellitas(){
     setTimeout(() => {
       
       console.log(this.marvelList)
      this.marvelList.forEach(element => {
        this.checkStar(element)
      });
     }, 1000);
   }

   checkStar(character:any){
     console.log('entro')
    const clase:any = 'adrian' + character.id
    const star:any = document.getElementById(clase)
    console.log(star)
    for(let i = 0; i< this.favoriteList.length; i++){
      if(character.name === this.favoriteList[i].name){
        star.style.fontWeight = 'bold'
        break
      }
    }
   }

   parseData (list:Imarvel []) {
     list.map(element => element.selected = false)
   }

   chekCharacter(character:any){
    for(let i = 0; i< this.favoriteList.length; i++){
      if(character.name === this.favoriteList[i].name){
        this.isInFavorites = true
        break
      }
    }
   }

    toFavorite (character:any) {
      const clase:any = 'adrian' + character.id
      const star:any = document.getElementById(clase)
      this.chekCharacter(character)
      if (this.isInFavorites === false && star) {
        this.favoriteList.push(character)
        star.style.fontWeight = 'bold'
        this.mainSrv.favorites = this.favoriteList
      } else {
        star.style.fontWeight = ''
        this.isInFavorites = false
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

   getPrevious(){
    if(this.offsetValue>0){
      this.offsetValue -= 100
      this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL + URL.limit + this.limitValue + URL.offset + this.offsetValue)).subscribe((res:any) => {
        this.parseData(res.data.results)
        this.marvelList = res.data.results
        this.pintarEstrellitas()
      })
    }
   }

   getNext(){
    if(this.offsetValue < 1400){
     this.offsetValue += 100
     this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL + URL.limit + this.limitValue + URL.offset + this.offsetValue)).subscribe((res:any) => {
      this.parseData(res.data.results)
      this.marvelList = res.data.results
      this.pintarEstrellitas()
    })
    }   
   }
}
