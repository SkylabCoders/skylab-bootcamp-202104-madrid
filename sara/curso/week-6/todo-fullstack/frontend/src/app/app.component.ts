import { Component, OnInit } from '@angular/core';
import Task from './models/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// eslint-disable-next-line import/prefer-default-export
export class AppComponent implements OnInit {
  tasks:any

  inputText = 'Create a new task'

  constructor(private taskService:TaskService) {}

  ngOnInit() {
    this.paintList();
  }

  paintList() {
    this.taskService.getAll().subscribe((res:any) => {
      this.tasks = res;
    });
  }

  async addNewTask(newTask:string) {
    this.taskService.create(newTask).subscribe();
    setTimeout(() => {
      this.paintList();
    }, 1000);
  }
}
