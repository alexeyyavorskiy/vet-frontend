import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MAIN_URL} from "../shared/models/constants/constants";
import {IOwner} from "../shared/models/interfaces/owner";

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http: HttpClient) {
  }

  getOwners() {
    return this.http.get<IOwner[]>(`${MAIN_URL}/owners/getAll`);
  }

  removeOwner(id: string) {
    return this.http.delete<IOwner>(`${MAIN_URL}/owners/delete/${id}`);
  }
}
