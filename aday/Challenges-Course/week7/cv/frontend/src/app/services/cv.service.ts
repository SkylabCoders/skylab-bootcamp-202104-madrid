import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cv } from '../models/cv';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export default class CvService {
  constructor(private httpClient: HttpClient) { }

  getAllCvs() {
    return this.httpClient.get(environment.urlApi);
  }
}
