import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon';
  pokeList: any[] = [];

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getData(this.url).subscribe((res:any) => {
      this.pokeList = res['results'];
      console.log(this.pokeList);
    } )
  }

}
