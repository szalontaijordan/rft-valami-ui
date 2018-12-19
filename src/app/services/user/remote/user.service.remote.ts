import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService, User } from '../user.service';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoteUserService extends UserService {

  constructor(private http: HttpClient) {
    super();
    this.currentUser = new BehaviorSubject(null);
  }

  authenticate(username: string, password: string) {
    return this.http.post('/api/oauth/token', { username, password });
  }

  getCurrentUser(username: string) {
    return this.all().pipe(
      map(result => {
        const current = result.find(user => user.username === username);
        this.currentUser.next(current);
        return current;
      })
    );
  }

  isValid() {
    return of(this.authToken);
  }

  upload(username: string, password: string, firstName: string, lastName: string, email: string) {
    const roles = [
      {
        id: 1,
        roleName: 'STANDARD_USER',
        description: 'Standard User - Has no admin rights'
      }
    ];
    return this.http.post('/api/register', { username, password, firstName, lastName, email, roles }).pipe(
      map(response => ({ message: response }))
    );
  }

  update(fullUser: User) {
    const headers = {
      'Authorization': 'Bearer ' + this.authToken
    };

    return this.http.put('/api/user/update', { ...fullUser }, { headers }).pipe(
      map(response => ({ message: response }))
    );
  }

  remove(id: string) {
    const headers = {
      'Authorization': 'Bearer ' + this.authToken
    };

    return this.http.delete('/api/user/remove/' + id, { headers });
  }

  all(): Observable<Array<any>> {
    const headers = {
      'Authorization': 'Bearer ' + this.authToken
    };

    return this.http.get<Array<any>>('/api/user/users', { headers });
  }
}
