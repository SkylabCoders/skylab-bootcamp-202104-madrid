import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cv } from '../models/cv';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line import/prefer-default-export
export class CvService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private httpClient: HttpClient) { }

  getAllCvs() {
    return this.httpClient.get(environment.urlApi);
  }
}
