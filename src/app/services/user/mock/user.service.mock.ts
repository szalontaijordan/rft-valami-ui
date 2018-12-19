import { Injectable } from '@angular/core';

import { UserService, User } from '../user.service';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUserService extends UserService {

  private mockUser = {
    userName: 'mockUser',
    fullName: 'Mock User',
    email: 'mock@mock.mock',
    passowrd: 'mockpassword',
    role: 'ADMIN'
  };

  constructor() {
    super();
    this.authToken = 'mock-token';
    this.currentUser = new BehaviorSubject<any>(null);
  }

  getCurrentUser(username: string) {
    return of(this.mockUser);
  }

  authenticate(userName: string, password: string) {
    return of({});
  }

  isValid(): Observable<any> {
    return of('this.mockUser');
  }

  upload(userName: string, password: string, fullName: string, email: string): Observable<any> {
    return null;
  }

  update(fullUser: User): Observable<any> {
    return null;
  }

  remove(id: string): Observable<any> {
    return of(true);
  }

  all(): Observable<Array<any>> {
    const mockUsers = [];

    for (let i = 0; i < 20; i++) {
      mockUsers.push({
        id: String(i),
        userName: `mockuser${i}`,
        fullName: `Mock User${i}`,
        password: 'password1A',
        email: `mockuser${i}@example.com`,
        role: 'MOCK'
      });
    }

    return of(mockUsers);
  }

  private fullUserPOST(path: string, userName: string, password: string, fullName: string, email: string) {
    return of({ userName, password, fullName, email });
  }
}
