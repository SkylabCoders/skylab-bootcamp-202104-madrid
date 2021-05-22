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

  wantsToUpdate = false;

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
    }, 500);
  }

  deleteTask(id:string) {
    this.taskService.delete(id).subscribe();
    setTimeout(() => {
      this.paintList();
    }, 500);
  }

  goToUpdate() {
    this.wantsToUpdate = true;
  }

  update(id:string, updateTask:string) {
    console.log(id);
    console.log(updateTask);
    this.wantsToUpdate = false;
    this.taskService.update(id, updateTask).subscribe();
    setTimeout(() => {
      this.paintList();
    }, 500);
  }
}
