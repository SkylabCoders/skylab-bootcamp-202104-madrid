import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


tareas:any = []
taskStatus = ["Pendiente", "Terminada", "Delego en Santi"]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.tareas = [form.value,...this.tareas]
    console.log(this.tareas)
  }

  delete(index:number){
    if(index > -1){
      this.tareas.splice(index,1)
    }
  }

}
