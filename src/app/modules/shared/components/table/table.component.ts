import {Component, Input, OnInit} from '@angular/core';
import {IAnimal} from "../../models/interfaces/animal";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: IAnimal[];
  @Input() displayedColumns: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
