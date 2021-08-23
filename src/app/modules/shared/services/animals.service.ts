import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IWildAnimal} from "../models/interfaces/wild-animal";
import {MAIN_URL} from "../models/constants/constants";
import {IAnimal} from "../models/interfaces/animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) {
  }

  getAnimals() {
    return this.http.get<IAnimal[]>(`${MAIN_URL}/animals/getAll`);
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

  getWilds(): Observable<IWildAnimal[]> {
    return of([
      {id: '1', birthDay: new Date().toISOString(), species: {label: 'First'}, vaccinated: true, trackingId: 10},
      {id: '2', birthDay: new Date().toISOString(), species: {label: 'Second'}, vaccinated: false, trackingId: 20},
      {id: '3', birthDay: new Date().toISOString(), species: {label: 'Third'}, vaccinated: true, trackingId: 30},
      {id: '4', birthDay: new Date().toISOString(), species: {label: 'First!'}, vaccinated: true, trackingId: 40},
      {id: '5', birthDay: new Date().toISOString(), species: {label: 'Second!'}, vaccinated: false, trackingId: 50},
      {id: '6', birthDay: new Date().toISOString(), species: {label: 'Third!'}, vaccinated: true, trackingId: 60}
    ]);
  }
}
