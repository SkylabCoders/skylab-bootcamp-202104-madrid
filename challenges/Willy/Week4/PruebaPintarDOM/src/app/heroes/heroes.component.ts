import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  @Input() heroes:any;
  hero:any;

  show = false;
  textToShow = 'Show List';
  city ='Zaragoza';

  constructor() { }

  ngOnInit(): void {
  }

  toggleList(){
    this.show = !this.show;
    if(this.show){
      this.textToShow = 'Hide List'
    } else {
      this.textToShow = 'Show List'
    }
  }

  getHeroDetail(hero:any){
    this.hero = hero
    //this.heroName = hero.name
  }
  getHeroMod(evt:any){
    console.log(evt);
    this.heroes.push(evt)
  }

}
