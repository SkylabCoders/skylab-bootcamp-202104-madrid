import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Cv } from '../models/cv'

@Injectable({
  providedIn: 'root'
})

export default class CvService {
  constructor (private httpClient: HttpClient) { }

  getAllCvs (url: string) {
    return this.httpClient.get(url)
  }
}
