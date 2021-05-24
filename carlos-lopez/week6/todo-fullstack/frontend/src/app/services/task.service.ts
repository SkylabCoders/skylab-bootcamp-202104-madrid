/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Task from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private httpClient: HttpClient) { }

  fetchTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(environment.taskApiUrl);
  }

  addTask(name: string): Observable<Task> {
    return this.httpClient.post<Task>(
      environment.taskApiUrl,
      {
        name,
      },
    );
  }

  deleteTask(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.taskApiUrl}/${id}`);
  }

  updateTask(id: string, name: string): Observable<Task> {
    return this.httpClient.put<Task>(
      `${environment.taskApiUrl}/${id}`,
      { name },
    );
  }
}
