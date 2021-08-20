import {Injectable} from '@angular/core';
import {StorageItems} from "../../shared/models/enums/storage-items";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public getToken() {
    return localStorage.getItem(StorageItems.AUTH_TOKEN);
  }

  public setToken(token: string) {
    localStorage.setItem(StorageItems.AUTH_TOKEN, token);
  }

  public removeToken() {
    localStorage.removeItem(StorageItems.AUTH_TOKEN);
  }

  public saveUserId() {
    localStorage.setItem(StorageItems.USER_ID, this.parseJwtUserId(this.getToken()));
  }

  parseJwtUserId(token) {
    try {
      const data = JSON.parse(atob(token.split('.')[0]));
      return data.id;
    } catch (e) {
      return null;
    }
  }

}
