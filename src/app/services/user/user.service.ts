import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class UserService {

  public headers = {
    'Content-Type': 'application/json'
  };

  isLoggedIn: boolean;
  currentUser: any;

  constructor() { }

  abstract isValid(userName: string, password: string): Observable<any>;

  abstract upload(userName: string, password: string, fullName: string, email: string): Observable<any>;

  abstract update(userName: string, password: string, fullName: string, email: string): Observable<any>;

  abstract remove(id: string): Observable<any>;

  abstract all(): Observable<Array<any>>;
}
