import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service'

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',
  styleUrls: ['./alumnos-detail.component.css']
})
export class AlumnosDetailComponent implements OnInit {
value:any;
  constructor(private srv:CommunicationService) { }

  ngOnInit(): void {
  }

  getValueFromService():void{
    // creamos una variable para recoger el valor del servicio en este componente
    this.value = this.srv.alumno
  }
}

/**
 * Otra forma...en el constructor en vez de private poner public, porque sino peta
 * Se puede eleminar el metodo getValueFromService
 * Ahora en el HTML se puede quitar el evento click del boton llamando a la funcion getValueFromService
 * en el ngIf="value" del HTML, lo quitamos y lo cambiamos por srv.alumno, y ahora en los mostachos {{srv.alumno.proiedadQueQUeramos}}
 */
