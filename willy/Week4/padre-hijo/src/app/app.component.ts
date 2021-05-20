import { Component } from '@angular/core';
import { IAlumnos} from './models/IAlumnos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padre-hijo';
  alumnos: IAlumnos[] = [
    {name:"Adrian", age: 30 , course: "Angular 1"},
    {name: "Willy", age: 31 , course: "css tricks"},
    {name: "Renszo" , age: 34 , course: "Angular 3"},
    {name:"Aday", age: 30 , course: "Angular Hotpink"},
    {name: "Adan", age: 24 , course: "Nintendero"},
    {name: "Carlos" , age: 29 , course: "Angular 3"},
    {name: "Sara" , age: 26 , course: "Angular 3"}
  ]
}
