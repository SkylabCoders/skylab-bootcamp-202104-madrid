import { Component, OnInit } from '@angular/core'
import { StorageService } from '../services/storage.service'
import { LoginService } from '../services/login.service'
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
