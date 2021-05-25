/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import User from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.cvApiUrl);
  }

  addExperience(
    id:string, language:string,
  ): Observable<User> {
    return this.httpClient.put<User>(
      `${environment.cvApiUrl}/${id}`,
      {
        knowledge: language,
      },
    );
  }

  deleteUser(id:string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.cvApiUrl}/${id}`);
  }

  updateExperience(id: string, skills:string): Observable<User> {
    return this.httpClient.put<User>(
      `${environment.cvApiUrl}/${id}`,
      { skills },
    );
  }
}
