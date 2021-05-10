import { Component, OnInit,Input } from '@angular/core';
import {IAlumno} from '../models/IAlumnos'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() list: IAlumno[] = []
  alumno:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  storeAlumno(alumno:any){
    this.alumno = alumno
  }
}
