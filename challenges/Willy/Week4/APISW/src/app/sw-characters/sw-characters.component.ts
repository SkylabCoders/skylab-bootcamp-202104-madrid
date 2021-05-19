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

    this.http.getData(this.characterUrl).subscribe((res:any)=>{
      this.characterList = res['results']
    })
    
  }

}
