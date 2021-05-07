import { Component, OnInit, Input } from '@angular/core';
import { IAlumnos } from '../models/IAlumnos'

@Component({
  selector: 'app-alumnos-list-hijo',
  templateUrl: './alumnos-list-hijo.component.html',
  styleUrls: ['./alumnos-list-hijo.component.scss']
})
export class AlumnosListHijoComponent implements OnInit {
  @Input() list: IAlumnos[] = []
  alumno:any;
  mustRender = true;
  nota = 0;
  constructor() { }

  ngOnInit(): void {
  }

  storeAlumno(alumno:any){
    this.alumno = alumno
  }

  getNota(event:any){
    this.nota = event;
  }

}
