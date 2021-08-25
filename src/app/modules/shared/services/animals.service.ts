import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IWildAnimal} from "../models/interfaces/wild-animal";
import {MAIN_URL} from "../models/constants/constants";
import {IAnimal} from "../models/interfaces/animal";
import {IPet} from "../models/interfaces/pet";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) {
  }

  getPets() {
    return this.http.get<IPet[]>(`${MAIN_URL}/animals/getAllPets`);
  }

  getAnimalById(id: number) {
    return this.http.get<IAnimal>(`${MAIN_URL}/animals/getById/${id}`);
  }

  createAnimal(pet: IAnimal) {
    return this.http.post<IAnimal>(`${MAIN_URL}/animals/create`, pet);
  }

  updateAnimal(pet: IAnimal) {
    return this.http.put<IAnimal>(`${MAIN_URL}/animals/update/${pet.id}`, pet);
  }

  removeAnimal(id: string) {
    return this.http.delete<IAnimal>(`${MAIN_URL}/animals/delete/${id}`);
  }

  getWilds() {
    return this.http.get<IWildAnimal[]>(`${MAIN_URL}/animals/getAllWilds`);
  }
}
