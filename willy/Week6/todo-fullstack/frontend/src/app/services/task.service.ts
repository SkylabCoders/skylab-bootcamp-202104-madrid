import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Task from '../models/task'
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  fetchTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(environment.taskApiUrl)
  }

  addTask(description: string, isCompleted:boolean): Observable<Task> {
    return this.httpClient.post<Task>(
      environment.taskApiUrl, 
      {
        description,
        isCompleted
        
      }
    )
  }
  
  deleteTask(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.taskApiUrl}/${id}`);
  }
  
  updateTask(id: string, description: string): Observable<Task> {
    return this.httpClient.put<Task>(
      `${environment.taskApiUrl}/${id}`,
      {description}
      );
  }

}
