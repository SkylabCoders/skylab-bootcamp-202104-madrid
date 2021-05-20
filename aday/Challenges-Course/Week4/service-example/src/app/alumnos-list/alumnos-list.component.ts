import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  superAlumnosList = [
   {name: 'Adrian', superPower: 'Skater'}, 
   {name: 'Aday', superPower: 'Bananaman'},
   {name: 'Willy', superPower: 'Time travel'},
   {name: 'Renszo', superPower: 'The fucking master'},
   {name: 'Adan', superPower: 'Tiene cara y cuenta refranes'},
   {name: 'Carlos', superPower: 'Peraman'},
  ]

  constructor(private srv:CommunicationService) { }

  ngOnInit(): void {
  }

  getSuperAlumno(superAlumno: any){
    this.srv.superAlumno = superAlumno;
    console.log(superAlumno);
  }

}
