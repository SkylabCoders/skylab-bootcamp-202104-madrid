import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  heroCopy = {};
@Input() heroe: any;
@Output() heroModified = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.heroCopy = JSON.parse(JSON.stringify(this.heroe));
  }

  modifyHero(){
    this.heroModified.emit(this.heroCopy)
  }

}
