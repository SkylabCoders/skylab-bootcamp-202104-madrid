import { Component, OnInit } from '@angular/core';
import { HttpService} from '../services/http.service'
import {LocalStorageService} from '../services/local-storage.service'
import {ISWList} from '../models/ISWList'

@Component({
  selector: 'app-sw-starships',
  templateUrl: './sw-starships.component.html',
  styleUrls: ['./sw-starships.component.css']
})
export class SwStarshipsComponent implements OnInit {

starshipsUrl = 'https://swapi.dev/api/starships/'

starshipsList: ISWList[] = []

  constructor(private http:HttpService, private storeSvr:LocalStorageService) { }

  ngOnInit(): void {
    const starshipStored = this.storeSvr.get('starshipList')
    if(!starshipStored){
      
    const obs$ = this.http.getData(this.starshipsUrl).subscribe((res:any)=>{
      this.starshipsList = res['results']
      this.storeSvr.set('starshipList', this.starshipsList);
      obs$.unsubscribe;
      
    })} else {
      this.starshipsList = starshipStored;
    }

  }

}
