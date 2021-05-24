import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import User from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpclient: HttpClient) { }
}
