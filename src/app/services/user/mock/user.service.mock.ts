import { Injectable } from '@angular/core';

import { UserService } from '../user.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUserService extends UserService {

  private dummyUser = {
    userName: 'mockUser',
    fullName: 'Mock User',
    email: 'mock@mock.mock',
    passowrd: 'mockpassword'
  };

  constructor() {
    super();
    this.isLoggedIn = false;
  }

  isValid(userName: string, password: string): Observable<any> {
    return of(this.dummyUser);
  }

  upload(userName: string, password: string, fullName: string, email: string): Observable<any> {
    return this.fullUserPOST('', userName, password, fullName, email);
  }

  update(userName: string, password: string, fullName: string, email: string): Observable<any> {
    return this.fullUserPOST('', userName, password, fullName, email);
  }

  remove(id: string): Observable<any> {
    return of(true);
  }

  all(): Observable<Array<any>> {
    const mockUsers = [];

    for (let i = 0; i < 20; i++) {
      mockUsers.push({
        userName: `mockuser${i}`,
        fullName: `Mock User (${i})`,
        password: 'password1A',
        email: `mockuser${i}@example.com`
      });
    }

    return of(mockUsers);
  }

  private fullUserPOST(path: string, userName: string, password: string, fullName: string, email: string) {
    return of({ userName, password, fullName, email });
  }
}
