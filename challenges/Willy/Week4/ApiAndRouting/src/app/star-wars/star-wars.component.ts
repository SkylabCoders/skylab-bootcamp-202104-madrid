import { Component, OnInit } from '@angular/core';
import { HttpService} from '../services/http.service'

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  starUrl = 'https://swapi.dev/api/starships'

  starWarsList:any[] = [];



  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getData(this.starUrl).subscribe((res:any)=>{
      this.starWarsList = res['results']
    })
  }

}
