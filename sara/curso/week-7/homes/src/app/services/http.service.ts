/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getAll(url:string) {
    return this.httpClient.get(url);
  }
}
