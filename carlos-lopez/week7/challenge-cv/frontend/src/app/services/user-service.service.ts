/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any> {
    return this.httpClient.get(environment.cvApiUrl);
  }
}
