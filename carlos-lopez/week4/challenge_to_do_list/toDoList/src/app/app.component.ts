import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  list = [
    {task: "Clean", whose: "Carlos", status:false, deadline: "20/05/2021"},
    {task: "Tidy", whose: "Sara", status:false, deadline:"20/05/2021"},
    {task: "Wash", whose: "Adri", status:false, deadline: "20/05/2021"},
    {task: "Run", whose: "Carlos", status:false, deadline: "20/05/2021"},
  ]
}
