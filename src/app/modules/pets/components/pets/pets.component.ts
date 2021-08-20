import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.pets$ = this.dataService.getPets();
    this.displayedColumns = ['id', 'species', 'birthDay', 'owner', 'vaccinated'];
  }

}
