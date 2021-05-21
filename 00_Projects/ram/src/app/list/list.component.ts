import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  url = this.srvMain.url
  imInTheList = this.srvMain.amIInList
  ram: any[] = [];
  completeRam:any;

  constructor(public srvMain:MainService, public router:Router){ }

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

  sendToDetail(character:object){
    this.srvMain.detailsCharacter = character;
    this.router.navigate(['details']);
  }

}

