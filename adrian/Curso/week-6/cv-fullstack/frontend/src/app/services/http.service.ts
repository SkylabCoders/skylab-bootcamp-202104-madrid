/* eslint-disable import/prefer-default-export */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import User from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = environment.cvUrl;

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${this.url}/60aba9de34451c2fe88459a9`
    );
  }

  updateCv(change: any): Observable<any> {
    return this.httpClient.put<User[]>(
      `${this.url}/60aba9de34451c2fe88459a9`,
      change
    );
  }
}
