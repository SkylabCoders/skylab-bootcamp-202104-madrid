import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() list:any;
  pruebamensaje = 'hola';
  toDo:any;
  task:any
  taskName:any;
  show = false;
  textToShow = 'Show List';
  newTask:any;
  newT:any;
  newWhose:any;
  newStatus:any;
  parseBoolean:boolean;
  newDeadline:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.newTask = {...this.toDo};
  }

  toggleList(){
    this.show = !this.show;
    if(this.show){
      this.textToShow = 'Hide List';
    } else {
      this.textToShow = 'Show List';
    }
  }
  getListDetails(task:any){
    this.task = task;
    this.taskName = task.task
  }
  addTask(){
    this.newTask.task = this.newT
    this.newTask.whose = this.newWhose
    switch(this.newStatus){
      case "false":
        this.parseBoolean = false;
      break;
      case "true": 
        this.parseBoolean = true;
      break;    
    }
    this.newTask.status = this.parseBoolean;
    this.newTask.deadline = this.newDeadline;
    this.list.push(this.newTask);
    console.log(this.list);
    return this.resetProperties();
  }
  resetProperties(){
    this.newT;
    this.newWhose;
    this.newStatus;
    this.parseBoolean;
    this.newDeadline;
  }

}
