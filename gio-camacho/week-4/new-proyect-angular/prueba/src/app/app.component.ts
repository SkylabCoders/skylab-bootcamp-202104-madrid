import { Component,Input } from '@angular/core';
import { IAlumno} from './models/IAlumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'padreHijo'
  alumnoList: IAlumno[] = [
    {name: 'Adrian', age: 30, course: 'Angular'},
    {name: 'Pepe', age: 3, course: 'React'},
    {name: 'Jose', age: 20, course: 'Vue'},
    {name: 'Mario', age: 33, course: 'JQuery'},
    {name: 'Pedro', age: 43, course: 'Svelte'}
  ]
}
