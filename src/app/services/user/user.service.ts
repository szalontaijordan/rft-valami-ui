import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  roles: Array<{
    id: number,
    roleName: string;
    description: string;
  }>;
}

@Injectable()
export abstract class UserService {

  public headers = {
    'Content-Type': 'application/json'
  };

  authToken: string;
  currentUser: BehaviorSubject<User>;

  constructor() { }

  abstract authenticate(userName: string, password: string): Observable<any>;

  abstract getCurrentUser(username: string): Observable<any>;

  abstract isValid(): Observable<string>;

  abstract upload(username: string, password: string, firstName: string, lastName: string, email: string): Observable<any>;

  abstract update(fullUser: User): Observable<any>;

  abstract remove(id: string): Observable<any>;

  abstract all(): Observable<Array<User>>;
}
