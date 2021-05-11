import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   Mockmarvel:Imarvel [] = [
     {
       name: 'Cyclops',
       description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
       thumbnail: {
         extension: 'jpg',
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad'
       }
     },
     {
       name: 'Renszo',
       description: 'AIM is a terrorist organization bent on destroying the world.',
       thumbnail: {
         extension: 'jpg',
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec'
       }
     },
     {
       name: 'Abomination',
       description: 'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
       thumbnail: {
         extension: 'jpg',
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04'
       }
     },
     {
       name: 'Adam Warlock',
       description: 'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
       thumbnail: {
         extension: 'jpg',
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860'
       }
     }
   ]
<<<<<<< HEAD

   constructor (public http:HttpService) { }

   ngOnInit (): void {
   }
=======

   marvelList:Imarvel [] = []
   PUBLIC_KEY = '15e7eedc86b57ed8c9aa86e4c26e4a2b';
    HASH = '55ab7706c5f814004ae2a053827b7004';

   readonly mainUrl = 'https://gateway.marvel.com:443/v1/public/'
    charactersUrl = `characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

    constructor (public mainSrv:MainService) {}

    ngOnInit (): void {
      this.mainSrv.getAction('getList', (this.mainUrl + this.charactersUrl)).subscribe((res:any) => {
        this.marvelList = res.data.results
      })
    }

    onlick () {
      console.log('hola')
    }
>>>>>>> 929b7a3a34e50595a69ff948d92e359184787d1a
}
