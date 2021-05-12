import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pruebaurl: any;
  url = "https://rickandmortyapi.com/api/character/";
  maxPage:any;

  ram: any[] = [];

  constructor(public srvMain:MainService){

  }

  ngOnInit(): void {
    let urlNew = this.srvMain.url
    const obs$ = this.srvMain.getTheAPI(urlNew).subscribe((res:any) => {
      console.log('a la lista llega esta url' + urlNew)
      this.ram = res.results;
      this.pruebaurl = res.info.next
      console.log(this.ram);
      obs$.unsubscribe();
      this.srvMain.url = 'https://rickandmortyapi.com/api/character'
    })
  }

  getNextPage():void {
      const obs$ = this.srvMain.getTheAPI(this.pruebaurl).subscribe((res:any) => {
        this.ram = res.results;
        obs$.unsubscribe();
        console.log(this.ram)
        console.log(this.pruebaurl);
        this.pruebaurl = res.info.next
      }) 
  }

  getPrevPage():void{
      const obs$ = this.srvMain.getTheAPI(this.pruebaurl).subscribe((res:any) => {
        this.ram = res.results;
        obs$.unsubscribe();
        console.log(this.ram)
        console.log(this.pruebaurl);
        this.pruebaurl = res.info.prev
      })
  }

}
