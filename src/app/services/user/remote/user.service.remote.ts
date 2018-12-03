import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOGIN_API } from '../../../app.api.routes';
import { UserService } from '../user.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteUserService extends UserService {

  constructor(private http: HttpClient) {
    super();
  }

  isValid(userName: string, password: string) {
    const body = { userName, password };
    const headers = { ...this.headers };

    return this.http.post(`${LOGIN_API}/isValid`, { headers, body });
  }

  upload(user_name: string, password: string, full_name: string, email: string) {
    return this.fullUserPOST('upload', user_name, password, full_name, email);
  }

  update(user_name: string, password: string, full_name: string, email: string) {
    return this.fullUserPOST('update', user_name, password, full_name, email);
  }

  remove(id: string) {
    return this.http.delete(`${LOGIN_API}/remove/${id}`);
  }

  all(): Observable<Array<any>> {
    return of([]);
  }

  private fullUserPOST(path: string, user_name: string, password: string, full_name: string, email: string) {
    const body = { user_name, password, full_name, email};
    const headers = { ...this.headers };

    return this.http.post(`${LOGIN_API}/${path}`, { headers, body });
  }
}
