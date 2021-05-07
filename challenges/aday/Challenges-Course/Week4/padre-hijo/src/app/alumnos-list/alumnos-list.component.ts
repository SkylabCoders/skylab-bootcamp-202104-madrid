import { Component, OnInit, Input } from '@angular/core';
import { IAlumnos } from '../models/IAlumnos';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
export class AlumnosListComponent implements OnInit {

@Input() list: IAlumnos[] = [];
alumno = {} as IAlumnos;
mustRender = true;
nota = 0;

  constructor() { }

  ngOnInit(): void {
  }

  storeAlumno(alumno:any){
    this.alumno = alumno;
  }

  toggleRender(){
    this.mustRender = false;
  }

  getNota(evt:any){
    this.nota = evt;
  }

}
