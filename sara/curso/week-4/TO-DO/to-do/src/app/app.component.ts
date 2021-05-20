import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';
  toDoList = [
    {"task":"Comprar tortitas", "who":"sara"},
    {"task":"tomar una cerve", "who":"sara"}
  ]  
}
