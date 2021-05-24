/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import User from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = environment.cvApiUrl;

  constructor(private http:HttpClient) { }
}
