import { Injectable } from '@angular/core';
import { APIService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    public api: APIService
  ) { }

  get(name: string): Observable<any> {
    return this.api.get(name);
  }

  public getGraphInfo(): Observable<any> {
    return this.get('/api/spreadsheet')
  }


}
