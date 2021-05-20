import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  /*heroes = [
    {name: 'Bombasto', id: 1, superPower: 'fly'},
    {name: 'Narco', id: 2, superPower: 'getCoke'},
    {name: 'Musulman', id: 3, superPower: 'boom'}
  ]*/

  @Input() heroes: any;

  show = false;
  heroe: any;
  textToShow = 'Show list';
  city = 'Madrid';
  constructor() { }

  ngOnInit(): void {
  }

  toggleList(){
    this.show = !this.show;
    if(this.show){
      this.textToShow = 'Hide list';
    } else {
      this.textToShow = 'Show List';
    }
  }

  getHeroDetails(heroe:any){
    this.heroe = heroe
  }

  getHeroMod(evt:any){
    console.log(evt);
  }

}

// ngAfterContentInit
// ngAfterViewInit
// ngOnDestroy