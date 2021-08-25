import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {

  endpoint = `${environment.api}/orders`;

  export(): Observable<any> {
    return this.http.post(`${environment.api}/export`, {}, {responseType: 'blob'});
  }

  chart(): Observable<any> {
    return this.http.get(`${environment.api}/chart`);
  }
}
