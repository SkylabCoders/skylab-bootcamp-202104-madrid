/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private httpClient: HttpClient) { }

  fetchApi(url:string) {
    return this.httpClient.get(url);
  }
}
