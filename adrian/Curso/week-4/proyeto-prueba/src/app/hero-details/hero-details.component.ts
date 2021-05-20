import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.sass']
})
export class HeroDetailsComponent implements OnInit, OnChanges {
  @Input() hero:any;
  heroCopy:any;
  @Output() heroMod = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.heroCopy = JSON.parse(JSON.stringify(this.hero));
  }
  modifyHero(){
    this.heroMod.emit(this.heroCopy);
  }
}
