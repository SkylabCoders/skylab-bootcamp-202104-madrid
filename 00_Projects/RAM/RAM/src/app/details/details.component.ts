import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service'
import {LoginService} from '../services/login.service'
import {HttpService} from '../services/http.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';

  ram: any[] = [];

  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService){

  }

  ngOnInit(): void {
    const obs$ = this.srvHttp.getAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      console.log(this.ram);
      obs$.unsubscribe();
    })
  }

}
