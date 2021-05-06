import { Component, OnInit } from '@angular/core';
import { HttpService} from '../services/http.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokeurl = "https://pokeapi.co/api/v2/pokemon/"
  pokeList:any[] = [];
  obsArr$:any[] = [] //el $ atrás indica que es un observable
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    const obs$ = this.http.getData(this.pokeurl).subscribe((res:any) =>{
      console.log(res)
      this.pokeList = res['results']
      obs$.unsubscribe(); // con esto "matas" el observable justo despues de ejecutarse
    })
    
  }
  
 

}
