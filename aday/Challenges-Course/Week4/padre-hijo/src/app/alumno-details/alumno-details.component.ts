import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlumnos } from '../models/IAlumnos';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.scss']
})
export class AlumnoDetailsComponent implements OnInit {

  @Input() alumno = {} as IAlumnos;
  @Output() nota = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMark(){
    this.nota.emit(this.getRandomMark());
  }

  getRandomMark(){
    return Math.floor(Math.random() *10);
  }

}
