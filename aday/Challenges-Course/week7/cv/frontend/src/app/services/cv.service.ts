import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Cv } from '../models/cv'
import environment from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export default class CvService {
  constructor (private httpClient: HttpClient) { }

  getAllCvs (): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(environment.urlApi)
  }

  deleteCv (dni: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.urlApi}/${dni}`)
  }

  updateCv (dni: number, linkedin: string): Observable<Cv[]> {
    return this.httpClient.put<Cv[]>(`${environment.urlApi}/${dni}`,
      { linkedin }
    )
  }
}
