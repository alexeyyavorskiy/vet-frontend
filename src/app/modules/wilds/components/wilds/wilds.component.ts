import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IPet} from "../../../shared/models/interfaces/pet";
import {AnimalsService} from "../../../shared/services/animals.service";
import {IWildAnimal} from "../../../shared/models/interfaces/wild-animal";

@Component({
  selector: 'app-wilds',
  templateUrl: './wilds.component.html',
  styleUrls: ['./wilds.component.scss']
})
export class WildsComponent implements OnInit {
  public wilds$: Observable<IWildAnimal[]>;
  public displayedColumns: string[];

  constructor(private dataService: AnimalsService) {
  }

  ngOnInit(): void {
    this.wilds$ = this.dataService.getWilds();
    this.displayedColumns = ['id', 'species', 'birthDay', 'trackingId', 'vaccinated', 'actions'];
  }

}
