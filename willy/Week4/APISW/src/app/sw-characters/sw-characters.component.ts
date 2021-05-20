import { Component, OnInit } from '@angular/core';
import { HttpService} from '../services/http.service'
import {ISWList} from '../models/ISWList'

@Component({
  selector: 'app-sw-characters',
  templateUrl: './sw-characters.component.html',
  styleUrls: ['./sw-characters.component.css']
})

export class SwCharactersComponent implements OnInit {

 
characterUrl = 'https://swapi.dev/api/people/'

characterList: ISWList[] = []

  constructor(public http:HttpService) { }

  ngOnInit(): void {
    // this.characterUrl
    this.http.getData('https://gateway.marvel.com:443/v1/public/characters?apikey=15e7eedc86b57ed8c9aa86e4c26e4a2b&hash=55ab7706c5f814004ae2a053827b7004').subscribe((res:any)=>{
      console.log(res)
      this.characterList = res['results']
    })
    
  }

}
