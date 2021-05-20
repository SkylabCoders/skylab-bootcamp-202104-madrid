import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service'

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  superAlumnosList = [
    {name:'Adrian', superPower:'Skater'},
    {name:'Aday', superPower:'Bananaman'},
    {name:'Sara', superPower:'te miro y te programo'},
    {name:'Willy', superPower:'Timetravel'},
    {name:'Renzso', superPower:'The fucking master'},
    {name:'Adan', superPower:'Tiene cara y cuenta refranes'},
    {name:'Carlos', superPower:'Peraman'}

  ]

  constructor(private srv: CommunicationService) { }

  ngOnInit(): void {
  }

  getSuperAlumno(alumno:any):void{
    this.srv.alumno = alumno 
    // en el servicio hay una propiedad alumno:any y esto se guarda en el servicio, no en el componente
    console.log(alumno)
  }

}

