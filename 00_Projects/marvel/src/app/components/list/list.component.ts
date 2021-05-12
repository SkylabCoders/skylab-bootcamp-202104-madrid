import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   title:string = 'Character list'
   marvelList:Imarvel [] = []
   PUBLIC_KEY = '15e7eedc86b57ed8c9aa86e4c26e4a2b'
   HASH = '55ab7706c5f814004ae2a053827b7004'
   readonly mainUrl= 'https://gateway.marvel.com:443/v1/public/'
   charactersUrl = `characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

   constructor (public mainSrv:MainService) {}

   ngOnInit (): void {
     this.mainSrv.getAction('getList', (this.mainUrl + this.charactersUrl)).subscribe((res:any) => {
       this.marvelList = res.data.results
     })
   }

   onlick () {
     console.log('hola')
   }
}
