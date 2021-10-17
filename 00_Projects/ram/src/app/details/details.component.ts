import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  favorites: any[] = this.srvMain.favorites;
  isInFavorites = false;
  characterDetails = this.srvMain.detailsCharacter;
  indexOfDelete:any;
  episodeArray:Array<object> = [];

  constructor (public srvMain:MainService) { }

  ngOnInit (): void {
    this.checkFavorites()
    this.getUrl()
  }

  getUrl () {
    this.characterDetails.episode.forEach((element:string) => {
      this.srvMain.getTheAPI(element).subscribe((res:any) => {
        this.episodeArray.push(res.name)
      })
    })
  }

  checkFavorites () {
    const favouriteStar: HTMLElement | null = document.querySelector('.fav')
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.characterDetails.id === this.favorites[i].id) {
        this.isInFavorites = true
        this.indexOfDelete = i
        break
      }
    }
    if (this.isInFavorites && favouriteStar) {
      favouriteStar.style.fontWeight = 'bold'
    }
  }

  addIt () {
    this.favorites.push(this.characterDetails)
    this.srvMain.favorites = this.favorites
    this.indexOfDelete = null
    this.isInFavorites = !this.isInFavorites
    this.checkFavorites()
  }

  deletIt () {
    this.favorites.splice(this.indexOfDelete, 1)
    this.srvMain.favorites = this.favorites
    this.indexOfDelete = null
    this.isInFavorites = !this.isInFavorites
    this.checkFavorites()
  }

  changeFavicon () {
    if (this.srvMain.canAddTofavs) {
      const favouriteStar: HTMLElement | null = document.querySelector('.fav')
      if (this.isInFavorites && favouriteStar) {
        favouriteStar.style.fontWeight = ''
        this.deletIt()
      } else if (this.isInFavorites === false && favouriteStar) {
        favouriteStar.style.fontWeight = 'bold'
        this.addIt()
      }
    }
  }
}
