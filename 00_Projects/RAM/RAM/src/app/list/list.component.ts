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
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      this.pruebaurl = res.info.next
      console.log(this.ram);
      obs$.unsubscribe();
    })
  }

  getNextPage():void {
    // if(this.pruebaurl !==  "https://rickandmortyapi.com/api/character/?page=35"){
      const obs$ = this.srvMain.getTheAPI(this.pruebaurl).subscribe((res:any) => {
        this.ram = res.results;
        obs$.unsubscribe();
        console.log(this.ram)
        console.log(this.pruebaurl);
        this.pruebaurl = res.info.next
      }) 
  }

  getPrevPage():void{
    // if(this.pruebaurl !==  "https://rickandmortyapi.com/api/character/?page=0"){
      const obs$ = this.srvMain.getTheAPI(this.pruebaurl).subscribe((res:any) => {
        this.ram = res.results;
        obs$.unsubscribe();
        console.log(this.ram)
        console.log(this.pruebaurl);
        this.pruebaurl = res.info.prev
      })
  }

}
