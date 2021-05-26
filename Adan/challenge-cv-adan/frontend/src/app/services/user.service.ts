/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import User from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (private httpClient: HttpClient) { }

  fetchUsers (): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.cvApiUrl)
  }

  addExperience (
    id:string, language:string
  ): Observable<User> {
    return this.httpClient.put<User>(
      `${environment.cvApiUrl}/${id}`,
      {
        knowledge: language
      }
    )
  }

  deleteExperience (id:string, knowledgeArr:any): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.cvApiUrl}/${id}`,
      {
        knowledge: knowledgeArr
      }
    )
  }

  updateExperience (id: string, language:any): Observable<User> {
    return this.httpClient.put<User>(
      `${environment.cvApiUrl}/${id}`,
      {
        knowledge: language
      }
    )
  }
}
