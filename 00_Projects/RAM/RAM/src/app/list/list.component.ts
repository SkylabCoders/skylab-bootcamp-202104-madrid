import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';
  pruebaurl = 'https://rickandmortyapi.com/api/character/?page='
  contador = 2;
  maxPage:any;

  ram: any[] = [];

  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      this.maxPage = res['info'].pages;
      console.log(this.ram);
      obs$.unsubscribe();
    })
  }

  getNextPage():void {
    if(this.contador <= this.maxPage){
      const obs$ = this.srvMain.getTheAPI(`${this.pruebaurl}${this.contador}`).subscribe((res:any) => {
        this.ram = res.results;
        obs$.unsubscribe();
      })
      this.contador++
    }
  }

}
