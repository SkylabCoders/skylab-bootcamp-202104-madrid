import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';

  ram: any[] = [];

  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      console.log(this.ram);
      obs$.unsubscribe();
    })
  }

}
