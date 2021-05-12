import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Meet de mighty heroes and villains of Marvel Universe'
  marvelList:Imarvel [] = []
  randomList:Imarvel [] = []
  topHeros:Imarvel [] = []
  PUBLIC_KEY = '15e7eedc86b57ed8c9aa86e4c26e4a2b';
   HASH = '55ab7706c5f814004ae2a053827b7004';

  readonly mainUrl = 'https://gateway.marvel.com:443/v1/public/'
   charactersUrl = `characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

   constructor (public mainSrv:MainService) {}

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (this.mainUrl + this.charactersUrl)).subscribe((res:any) => {
       this.randomList = res.data.results.sort(() => Math.random() - 0.5)
       for (let i = 0; i < 4; i++) {
         this.topHeros.push(this.randomList[i])
         console.log(this.topHeros)
       }
     })
   }
}
