import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../../shared/models/interfaces/credentials";
import {of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {TokenService} from "./token.service";

const MAIN_URL = 'https://bpla.mpsdevelopment.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  signIn(credentials: ICredentials) {
    const updatedCredentials = {login: credentials.email, password: credentials.password}
    // return this.http.post(MAIN_URL + '/api/auth/v1.0/login', updatedCredentials, {withCredentials: true});
    return of({token: "eyJ1aWQiOiJ5YXZvcnNraXkuYWxleGV5QGdtYWlsLmNvbSIsInJvbGUiOlsiVVNFUiJdLCJ0eXAiOiJKV1QiLCJpZCI6IjE2OTQ5NDk2NzcyNzA1NjQ4NjQiLCJ0eXBlIjoiVVNFUiIsImFsZyI6IkhTMjU2In0.eyJuYmYiOjE2MjkyODk3NTgsImlzcyI6Ik1QU0RldmVsb3BtZW50IiwiZXhwIjoxNjMyMDU0NTU4LCJpYXQiOjE2MjkzNzYxNTh9.cqRY9VLNp5qfLDDq7loxLrb5GBrbLBWwBN_0yRPOtT8"}).pipe(
      map(res => {
        this.tokenService.setToken(res.token);
        this.tokenService.saveUserId();
        return res;
      })
    );
  }

  signOut() {
    return this.http.post(MAIN_URL + '/api/auth/v1.0/logout', '').pipe(
      map(res => {
        this.tokenService.removeToken();
        return res;
      })
    );
  }
}
