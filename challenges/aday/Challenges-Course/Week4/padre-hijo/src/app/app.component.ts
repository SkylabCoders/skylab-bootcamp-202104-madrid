import { Component } from '@angular/core';
import {IAlumnos} from './models/IAlumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padre-hijo';
  alumno = {} as IAlumnos; // se llama casteo
  alumnosList: IAlumnos[] = [
    {name: 'Adrian', course: 'Angular'},
    {name: 'Sara', age: 26, course: 'Angular'},
    {name: 'Renszo', age: 34, course: 'Angular'},
    {name: 'Willy', age: 31, course: 'Angular'},
    {name: 'Aday', age: 30, course: 'Angular'},
    {name: 'Adan', age: 24, course: 'Angular'},
    {name: 'Carlos', age: 29, course: 'Angular'},
    {name: 'Angela', age: 26, course: 'Angular'}
  ]
}
