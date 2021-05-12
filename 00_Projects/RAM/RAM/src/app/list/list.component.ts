import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  url = this.srvMain.url
  maxPage:any;
  imInTheList = this.srvMain.amIInList
  ram: any[] = [];
  completeRam:any;

  constructor(public srvMain:MainService){ }

  ngOnInit(): void {
    this.chargePage(this.url)
  }

  chargePage(url:string){
    const obs$ = this.srvMain.getTheAPI(url).subscribe((res:any) => {
      this.ram = res.results;
      this.completeRam = res;
      this.srvMain.url = 'https://rickandmortyapi.com/api/character?page=1' 
      obs$.unsubscribe();
    })
  }

  getNextPage() {
    if(this.completeRam.info.next){
      this.chargePage(this.completeRam.info.next)     
    }
  }

  getPrevPage() {
    if(this.completeRam.info.prev && this.completeRam.info.prev !== 'https://rickandmortyapi.com/api/character'){
      this.chargePage(this.completeRam.info.prev)
    }
  }

}

