import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  ram: any[] = this.srvMain.favorites;
  indexOfDelete:any

  constructor(public srvMain:MainService, public router:Router){
  }

  ngOnInit(): void {
  }

  sendToDetail(character:any){
    this.srvMain.detailsCharacter = character;
    this.router.navigate(['details']);
  }

  deleteCharacters(character:any){
    for(let i = 0; i < this.ram.length; i++) {
      if(character.id === this.ram[i].id){
        this.indexOfDelete= i
        break;
      }
    }
    this.ram.splice(this.indexOfDelete, 1);
    this.srvMain.favorites = this.ram;
    this.indexOfDelete = null;
  }

}
