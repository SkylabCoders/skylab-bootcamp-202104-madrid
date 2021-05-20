import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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
 this.heroCopy = JSON.parse(JSON.stringify(this.hero));
  }
  modifyHero(){
this.heroMod.emit(this.heroCopy);
  }

}
