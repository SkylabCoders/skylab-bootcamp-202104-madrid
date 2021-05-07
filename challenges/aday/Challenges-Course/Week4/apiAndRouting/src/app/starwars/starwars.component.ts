import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  url = 'https://swapi.dev/api/people';

  starwarsList: any[] = [];

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    const obs$ = this.http.getData(this.url).subscribe((res:any) => {
      this.starwarsList = res['results'];
      console.log(this.starwarsList);
      obs$.unsubscribe();
    })
  }

}

/* para destruir un observable con un unsuscribe

ngOnInit(){
  const obs$ =  this.obsArray$(http.getData(this.url).subscribe((res:any) => {
      this.starwarsList = res['results'];
      console.log(this.starwarsList);
      obs$.unsubscribe();
    }))

}


*/

/* para destruir un observable con un noOnDestroy:

obsArray$ = []; y exportar la clase

this.obsArray$ = [http.getData(this.url).subscribe((res:any) => {
      this.starwarsList = res['results'];
      console.log(this.starwarsList);
    })] para meterlo en el array

    this.obsArray$.push(http.getData(this.url).subscribe((res:any) => {
      this.starwarsList = res['results'];
      console.log(this.starwarsList);
    })) para hacerlo mediante push

    ngOnDestroy(){
      this.obsArray$[0].unscribe();
    }

*/
