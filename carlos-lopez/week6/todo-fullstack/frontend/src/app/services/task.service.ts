import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Task from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
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
