import {Injectable} from '@angular/core';
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

  createOwner(owner: IOwner) {
    return this.http.post<IOwner>(`${MAIN_URL}/owners/create`, owner);
  }

  updateOwner(owner: IOwner) {
    return this.http.put<IOwner>(`${MAIN_URL}/owners/update/${owner.id}`, owner);
  }

  removeOwner(id: string) {
    return this.http.delete<IOwner>(`${MAIN_URL}/owners/delete/${id}`);
  }
}
