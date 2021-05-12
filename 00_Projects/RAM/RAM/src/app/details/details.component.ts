import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  url = 'https://rickandmortyapi.com/api/character';

  ram: any[] = [];

  favorites: any[] = this.srvMain.favorites;

  change = false;
  characterDetails = this.srvMain.detailsCharacter;
  
  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(){
    const el:any = document.querySelector('.example-header-image');
    el.style.backgroundImage =`url(${this.characterDetails.image})`;
  }

  changeFavicon(){
    this.change = !this.change;
    if(this.change){
      const el:any = document.querySelector('.fav');
      el.style.fontWeight = 'bold';
      const check = this.checkFavoriteList(this.characterDetails);
      if(!check){
        this.favorites.push(this.characterDetails);
        this.srvMain.favorites = this.favorites;
        console.log(this.favorites);
      }
    } else {
      const el:any = document.querySelector('.fav');
      el.style.fontWeight = '';
      this.favorites.pop();
      this.srvMain.favorites = this.favorites;
      console.log(this.favorites);
    }
  }
  checkFavoriteList(character: any): any{
   for(let i = 0; i < this.srvMain.favorites.length; i++) {
     if(character.id === this.srvMain.favorites[i].id){
       return true;
     }
   }
  }
}