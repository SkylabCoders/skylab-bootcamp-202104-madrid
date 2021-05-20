import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ServicesService} from '../services.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  url =  'https://pokeapi.co/api/v2/pokemon';
  constructor(private http:ServicesService, private storeSrv:StorageService) { }

  ngOnInit(): void {
    this.http.getData(this.url).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
