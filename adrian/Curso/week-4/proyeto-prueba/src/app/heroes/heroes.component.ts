import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  @Input() heroes:any;
  show= false;
  hero:any;
  textToShow = 'Show List';
  city = 'Madrid';
  constructor() { }

  ngOnInit(): void {
  }
  toggleList(){
    this.show = !this.show;
    if(this.show){
      this.textToShow = 'Hide list'
    }else{
      this.textToShow = 'show text'
    }
  }
  getHeroDetails(hero:any){
    this.hero = hero;

  }
  getHeroMod(evt:any){
    console.log(evt)
  }

}
