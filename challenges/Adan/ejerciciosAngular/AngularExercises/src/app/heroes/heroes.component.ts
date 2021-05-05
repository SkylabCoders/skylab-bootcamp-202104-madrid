import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
 @Input() heroes:any;
 hero:any;
 show= false;
 textToShow = 'Show List';
 city= 'Madrid';
  constructor() { }

  ngOnInit(): void {
  }
 toggleList(){
   this.show = !this.show;
   if(this.show){
     this.textToShow = 'Hide List';
   } else {
     this.textToShow = 'Show List'
   }
 }
 getHeroDetails(hero:any){
    this.hero = hero;
}
getHeroMod(evt:any){
  console.log(evt)
}
}
