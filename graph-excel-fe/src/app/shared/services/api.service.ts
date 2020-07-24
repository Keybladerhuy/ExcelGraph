import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    public http: HttpClient
  ) { }

  environment = {
    endpoint: 'http://localhost:3000'
  }

  // setup authentication here
  // public auth: Promise<any> = new Promise((resolve, reject), => {
  //   this.http.get(``)
  //     .first()
  //     .map(response: Response)
  // })

  get(url: string, params?: any): Observable<any> {
    console.log('Making GET API call to...');

    let urlParam = '';
    for (const p in params) {
      urlParam += urlParam + p + '=' + params[p];
    }
    urlParam = urlParam !== '' ? '?' + urlParam : '';

    console.log(`${this.environment.endpoint}${url}${urlParam}`);
    return this.http.get(`${this.environment.endpoint}${url}${urlParam}`, {responseType: 'json'}); // TEXT
  }

  post(url: string, params?:any): Observable<any> {
    // return this.http.get(`${this.environment.endpoint}${url}`); // JSON
    console.log(`${this.environment.endpoint}${url}`);
    return this.http.get(`${this.environment.endpoint}${url}`, {responseType: 'json'}); // TEXT
  }

}
