import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero:any;
  @Output() heroMod = new EventEmitter<any>();
  heroCopy:any;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.heroCopy = JSON.parse(JSON.stringify(this.hero)) // cada vez que hay un cambio, esto salta 
  }

  modifyHero(){
    this.heroMod.emit(this.heroCopy); //esto emite el objeto
  }

}
