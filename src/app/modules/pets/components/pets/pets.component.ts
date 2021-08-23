import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../../shared/services/animals.service";
import {Observable} from "rxjs";
import {IPet} from "../../../shared/models/interfaces/pet";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public pets$: Observable<IPet[]>;
  public displayedColumns: string[];

  constructor(private dataService: AnimalsService) {
  }

  ngOnInit(): void {
    this.pets$ = this.dataService.getAnimals() as Observable<IPet[]>;
    this.displayedColumns = ['id', 'species', 'birthDay', 'owner', 'vaccinated', 'actions'];
  }

}
