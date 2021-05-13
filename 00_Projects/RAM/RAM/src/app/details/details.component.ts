import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  favorites: any[] = this.srvMain.favorites;
  isInFavorites = false;
  change = false;
  characterDetails = this.srvMain.detailsCharacter;
  indexOfDelete:any
  
  constructor(public srvMain:MainService){ }

  ngOnInit(): void {
    const el:any = document.querySelector('.example-header-image');
    el.style.backgroundImage =`url(${this.characterDetails.image})`;
    this.checkFavorites();
  }

  checkFavorites(){
    const elFav:any = document.querySelector('.fav');
    for(let i = 0; i < this.favorites.length; i++) {
      if(this.characterDetails.id === this.favorites[i].id){
        this.isInFavorites=true;
        this.indexOfDelete= i
        break;
      }
    }
    if(this.isInFavorites){
      elFav.style.fontWeight = 'bold';
    }
  }

  addIt(){
    this.favorites.push(this.characterDetails);
    this.srvMain.favorites = this.favorites;
    this.favorites = this.srvMain.favorites;
    this.indexOfDelete = null;
    this.isInFavorites = !this.isInFavorites;
    this.checkFavorites();
    this.change = !this.change
  }

  deletIt(){
    this.favorites.splice(this.indexOfDelete, 1);
    this.srvMain.favorites = this.favorites;
    this.favorites = this.srvMain.favorites;
    this.indexOfDelete = null;
    this.isInFavorites = !this.isInFavorites;
    this.checkFavorites();
    this.change = !this.change
  }

  changeFavicon(){    
    this.change = !this.change;
    const el:any = document.querySelector('.fav');

    if(this.isInFavorites){
      if(this.change){
        el.style.fontWeight = '';
        if(this.isInFavorites){
          this.deletIt()
        }
        
      } else {
        el.style.fontWeight = 'bold';
        if(!this.isInFavorites){
          this.addIt()
        }
      }
    } else {
      if(this.change){
        el.style.fontWeight = 'bold';
        if(!this.isInFavorites){
          this.addIt();
        }
      } else {
        el.style.fontWeight = '';
        if(this.isInFavorites){
          this.deletIt()
        }
      }
    }
  }

}