import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Task from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Task[]>(environment.taskApiUrl);
  }

  create(description:string) {
    return this.httpClient.post<Task>(environment.taskApiUrl, { description });
  }
}
