import { Injectable } from '@angular/core';

import { UserService } from '../user.service';
import { of } from 'rxjs';

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
    super(null);
    console.log('Using mock implementation for UserService');
    this.isLoggedIn = false;
  }

  isValid(userName: string, password: string) {
    return of(this.dummyUser);
  }

  upload(userName: string, password: string, fullName: string, email: string) {
    return this.fullUserPOST('', userName, password, fullName, email);
  }

  update(userName: string, password: string, fullName: string, email: string) {
    return this.fullUserPOST('', userName, password, fullName, email);
  }

  remove(id: string) {
    return of(true);
  }

  private fullUserPOST(path: string, userName: string, password: string, fullName: string, email: string) {
    return of({ userName, password, fullName, email });
  }
}
