/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import Cv from ''
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CvService {
  constructor (private httpClient: HttpClient) { }

  fetchCv (): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(environment.apiUrl)
  }
}
