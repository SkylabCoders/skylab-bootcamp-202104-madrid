import { Component, OnInit } from '@angular/core';
import { HttpService} from '../services/http.service'
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokeurl = "https://pokeapi.co/api/v2/pokemon/"
  pokeList:any[] = [];
  obsArr$:any[] = [] //el $ atrás indica que es un observable
  constructor(public http:HttpService, public storeSrv:StorageService) { }

  ngOnInit(): void {
    const pokeListStored = this.storeSrv.get('pokeList')
    if(!pokeListStored){
    const obs$ = this.http.getData(this.pokeurl).subscribe((res:any) =>{
      console.log(res)
      this.pokeList = res['results']
      this.storeSrv.set('pokeList', this.pokeList); // aqui recoge el key (pokeList) en el localstorage
      obs$.unsubscribe(); // con esto "matas" el observable justo despues de ejecutarse
    })}else {
     this.pokeList = pokeListStored;
    }

    
  }
  
 

}
