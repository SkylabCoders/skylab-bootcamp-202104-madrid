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

  characterDetails = {
    created: '2017-11-04T18:48:46.250Z',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth (C-137)',    
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1'
  } 

  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      obs$.unsubscribe();
    })
  }

  ngAfterViewInit(){
    const el:any = document.querySelector('.example-header-image');
    el.style.backgroundImage =`url(${this.characterDetails.image})`;
  }

  changeFavicon(){
    const el:any = document.querySelector('.fav');
    el.style.fontWeight = 'bold'
  }
}