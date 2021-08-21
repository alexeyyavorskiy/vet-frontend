import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../../shared/models/interfaces/credentials";
import {map} from "rxjs/operators";
import {TokenService} from "./token.service";
import {MAIN_URL} from "../../shared/models/constants/constants";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  signIn(credentials: ICredentials) {
    return this.http.post(`${MAIN_URL}/auth/sign-in`, credentials).pipe(
      map((res: {token: string}) => {
        this.tokenService.setToken(res.token);
        this.tokenService.saveUserId();
        return res;
      })
    );
  }

  signUp(credentials: ICredentials) {
    return this.http.post(`${MAIN_URL}/auth/sign-up`, credentials).pipe(
      map((res: {token: string}) => {
        console.log(res);
        this.tokenService.setToken(res.token);
        this.tokenService.saveUserId();
        return res;
      })
    );
  }

  signOut() {
    return of({message: 'You have been successfully sign out'}).pipe(
      map(res => {
        this.tokenService.removeToken();
        return res;
      })
    );
  }
}
