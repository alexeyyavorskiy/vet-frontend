import { Component, OnInit } from '@angular/core';
import {OwnersService} from "../../owners.service";
import {Observable} from "rxjs";
import {IOwner} from "../../../shared/models/interfaces/owner";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  public owners$: Observable<IOwner[]>;
  public displayedColumns: string[];

  constructor(private ownersService: OwnersService) { }

  ngOnInit(): void {
    this.owners$ = this.ownersService.getOwners();
    this.displayedColumns = ['fullName', 'address', 'actions'];
  }

}
