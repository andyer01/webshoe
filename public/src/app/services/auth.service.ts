import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {

  domain = "http://localhost:8080";

  constructor(
    private http: Http


  ) { }

  registerUser(user) {
    return this.http.post(this.domain + '/users/register', user).map(res => res.json());
  }

  loginUser(user) {
    return this.http.post(this.domain + '/users/login', user).map(res => res.json());
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/users/checkUsername/' + username).map(res => res.json());
  }



  checkEmail(email) {
    return this.http.get(this.domain + '/users/checkEmail/' + email).map(res => res.json());
  }
}
