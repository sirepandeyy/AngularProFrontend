import { Observable } from 'rxjs';
import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {

  endpoint = `${environment.api}/users`
 
}
