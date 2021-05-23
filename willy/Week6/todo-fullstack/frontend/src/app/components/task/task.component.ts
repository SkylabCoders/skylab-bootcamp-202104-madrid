import {EventEmitter,  Component, Input, Output } from '@angular/core';
import Task from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  isDone = false
  @Input() task!: Task;
  @Output() deleteChange = new EventEmitter();
  @Output() updateChange = new EventEmitter();
 

  done(id:string){
    this.isDone = !this.isDone
  }
}
