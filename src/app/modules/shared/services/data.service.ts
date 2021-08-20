import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IPet} from "../models/interfaces/pet";
import {IOwner} from "../models/interfaces/owner";
import {IAddress} from "../models/interfaces/address";
import {IWildAnimal} from "../models/interfaces/wild-animal";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }


  getPets(): Observable<IPet[]> {
    const address: IAddress = {street: 'str', id: '1', city: 'Kiev', country: 'Ukraine', zipCode: '08120'};
    const firstOwner: IOwner = {id: '111', fullName: 'First one', address};
    const secondOwner: IOwner = {id: '222', fullName: 'Second one', address};
    return of([
      {id: '1', birthDay: new Date().toISOString(), species: {label: 'First'}, vaccinated: true, owner: firstOwner},
      {id: '2', birthDay: new Date().toISOString(), species: {label: 'Second'}, vaccinated: false, owner: firstOwner},
      {id: '3', birthDay: new Date().toISOString(), species: {label: 'Third'}, vaccinated: true, owner: firstOwner},
      {id: '4', birthDay: new Date().toISOString(), species: {label: 'First!'}, vaccinated: true, owner: secondOwner},
      {id: '5', birthDay: new Date().toISOString(), species: {label: 'Second!'}, vaccinated: false, owner: secondOwner},
      {id: '6', birthDay: new Date().toISOString(), species: {label: 'Third!'}, vaccinated: true, owner: secondOwner}
    ]);
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

  getOwners(): Observable<IOwner[]> {
    const address: IAddress = {street: 'str', id: '1', city: 'Kiev', country: 'Ukraine', zipCode: '08120'};
    return of([
        {id: '111', fullName: 'First one', address},
        {id: '222', fullName: 'Second one', address}
      ]
    )
  }
}
