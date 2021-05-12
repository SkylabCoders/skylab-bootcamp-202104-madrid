import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  url = 'https://rickandmortyapi.com/api/character';
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
    const el:any = document.querySelector('.fav');
    el.style.fontWeight = 'bold';
  }
}