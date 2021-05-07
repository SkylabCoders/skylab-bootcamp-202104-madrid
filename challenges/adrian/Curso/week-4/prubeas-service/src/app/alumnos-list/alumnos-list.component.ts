import { Component, OnInit } from '@angular/core';
import { ComunicationService} from '../service/comunication.service'

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  
  superAlumnosList = [
    {name:'Adrian', superPower: 'Skater'},
    {name:'Aday', superPower: 'Canario'},
    {name:'Sara', superPower: 'Te miro'},
    {name:'Willy', superPower: 'Time'},
    {name:'Adan', superPower: 'Cara'},
    {name:'Adrian', superPower: 'The master'},
  ]



  constructor(private srv:ComunicationService) { }

  ngOnInit(): void {
  }

  getSuperAlumno(alumno:any){
    this.srv.alumno = alumno;
    console.log(alumno);
  }

}
