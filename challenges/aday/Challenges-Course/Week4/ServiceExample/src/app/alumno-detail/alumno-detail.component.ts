import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service'

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent implements OnInit {
  value: any;
  constructor(public srv:CommunicationService) { }

  ngOnInit(): void {
  }

  // getValueFromService():void{
  //   this.value = this.srv.superAlumno
  // }

}
