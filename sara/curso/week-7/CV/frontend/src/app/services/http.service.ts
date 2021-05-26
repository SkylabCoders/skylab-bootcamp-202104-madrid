/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import User from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = environment.cvApiUrl;

  constructor(private http:HttpClient) { }

  fechtCV(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  updateCV(change:any):Observable<any> {
    return this.http.put(this.url, change);
  }
}
