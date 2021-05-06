import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.scss']
})
export class AlumnoDetailsComponent implements OnInit, OnDestroy {
@Input () alumno:any;
@Output () nota = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    alert('Me has matado')
  }
  getRandomMark(){
    return Math.floor(Math.random()*10)
  }

  sendMark(){
    this.nota.emit(this.getRandomMark())
  }

}
