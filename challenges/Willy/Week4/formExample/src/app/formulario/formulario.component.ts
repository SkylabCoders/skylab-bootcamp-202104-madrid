import { Component, OnInit } from '@angular/core';
import { Person } from './../formClass'
import { Character } from './../formClass'
import { MainService } from './../services/main.service'
import { HttpService} from './../services/http.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  model = new Person(this.mainSrv.getName(), 'Skywalker', 19,); //asi se llama a los servicios
  url = 'https://swapi.dev/api/people';
  dataApiSw:any
  constructor(private mainSrv: MainService, private httpSrv: HttpService) { }

  onSubmit() { 
  
   console.log(this.model)

   }

  newCharacter() {
    this.model = new Person('', '', 0);
    console.log(this.model)
  }

  ngOnInit(): void {
  }

  getData(){
    this.httpSrv.getData(this.url).then((res:any) => 
    {this.dataApiSw = res['results'];
    });
  
  }
getUrl(){
  const newUrl = prompt('introduce una nueva url');
  if (newUrl){
    this.url = newUrl;
  }
}

}
