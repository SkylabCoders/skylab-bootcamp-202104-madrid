import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor (private mainSrv:MainService) { }

  title = 'Your favorite list'
  yourFavorites = this.mainSrv.favorites
  ngOnInit (): void {
    console.log(this.yourFavorites)
  }

  remove (index:number) {
    if (index > -1) {
      this.yourFavorites.splice(index, 1)
    }
  }
}
