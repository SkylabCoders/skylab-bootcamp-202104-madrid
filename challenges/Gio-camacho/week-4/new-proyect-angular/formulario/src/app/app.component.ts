import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpSrv: HttpService){
  }

  url = 'https://swapi.dev/api/people'
  data:any;

  getData(){
    this.httpSrv.getData(this.url)
    .then((data:any) => {
      console.log( data.results )
      this.data = data['results']
    })
  }

  getUrl(){
    const newUrl: any = prompt('aoeu')
    if(newUrl){
      this.url = newUrl
    }
  }
  title = 'formulario';
}
