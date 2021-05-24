import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Info from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private httpSvr: HttpClient) { }

  getInfo(): Observable<Info[]> {
    this.httpSvr.get <Info[]>(
      environment.infoApiUrl
    );
  }
}
