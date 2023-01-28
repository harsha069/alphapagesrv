import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  base = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  postNewUser(data: any) {
    return this.http.post(this.base + '/api/postUserInfo', data);
  }

  getUsers() {
    return this.http.get(this.base + '/api/getUserInfo');
  }

  getUserById(id: any) {
    return this.http.get(this.base + '/api/getUserById/' + id);
  }

  updateUserById(id: any, data: any) {
    return this.http.put(this.base + '/api/updateUser/' + id, data);
  }

  deleteUserById(id: any) {
    return this.http.delete(this.base + '/api/deleteUser/' + id);
  }
}
