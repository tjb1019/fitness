import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '@environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(body: any): Promise<Object> {
    return this.http.post(`${environment.apiPath}/login`, body).toPromise();
  }

  getCardio(): Promise<Object> {
    return this.http.get(`${environment.apiPath}/cardio`).toPromise();
  }

  addCardio(body: any): Promise<Object> {
    return this.http.post(`${environment.apiPath}/cardio`, body).toPromise();
  }

}
