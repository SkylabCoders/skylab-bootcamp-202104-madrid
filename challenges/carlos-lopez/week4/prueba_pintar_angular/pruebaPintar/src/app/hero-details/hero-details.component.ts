import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.sass']
})

export class HeroDetailsComponent implements OnInit, OnChanges {
  @Input() hero:any;
  @Output() heroMod = new EventEmitter<any>();
  heroCopy: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.heroCopy = {...this.heroCopy};
  }
  modifyHero(){
    this.heroMod.emit(this.heroCopy);
  }


}
