/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';
import Task from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  wantsToUpdate = false;

  tasks:any

  constructor(private taskService:TaskService) { }

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

  update(id:string, updateTask:string) {
    this.wantsToUpdate = false;
    this.taskService.update(id, updateTask).subscribe();
    setTimeout(() => {
      this.paintList();
    }, 500);
  }
}
