import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class UserService {

  public headers = {
    'Content-Type': 'application/json'
  };

  isLoggedIn: boolean;

  constructor(private httpClient: HttpClient) { }

  abstract isValid(user_name: string, password: string): Observable<any>;

  abstract upload(user_name: string, password: string, full_name: string, email: string): Observable<any>;

  abstract update(user_name: string, password: string, full_name: string, email: string): Observable<any>;

  abstract remove(id: string): Observable<any>;
}
