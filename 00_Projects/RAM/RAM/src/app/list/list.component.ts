import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  url = this.srvMain.url

  ram: any[] = [];

  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
    let urlNew = this.srvMain.url
    const obs$ = this.srvMain.getTheAPI(urlNew).subscribe((res:any) => {
      console.log('a la lista llega esta url' + urlNew)
      this.ram = res.results;
      obs$.unsubscribe();
      this.srvMain.url = 'https://rickandmortyapi.com/api/character'
    })
  }

  ngOnDestroy():void {
    this.srvMain.url = 'https://rickandmortyapi.com/api/character'
  }

  

}
