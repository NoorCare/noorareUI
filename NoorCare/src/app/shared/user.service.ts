import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:35257';

  constructor(private http: HttpClient) { }

  registerUser(fullname,email,password,phone,jobType){
    const body: User = {
      FullName: fullname,
      Email: email,
      Password: password,
      Phone: phone,
      JobType: jobType
    }

    let reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'api/User/Register', body, {headers:reqHeader});
  }

  userAuthentication(userName, password) {
    let data = "username=" + userName + "&password=" + password + "&grant_type=password";
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader});
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/GetUserClaims');
  }
}
