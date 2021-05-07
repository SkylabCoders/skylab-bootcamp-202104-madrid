import { Component } from '@angular/core';
import { HttpService } from './services/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Aday To-Do List';
  url = 'https://swapi.dev/api/people';
  data = [];
  
  constructor(private mainSrv: MainService, private httpSrv:HttpService){}
  
  getData(){
    this.httpSrv.getData(this.url).then((res:any) => {
      this.data = res['results'];
    })
  }

  getUrl(){
    const newUrl:any = prompt('Introduce una nueva url');
    if(newUrl){
      this.url = newUrl
    }
  }

}
