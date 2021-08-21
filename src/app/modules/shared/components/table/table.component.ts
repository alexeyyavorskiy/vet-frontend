import {Component, Input, OnInit} from '@angular/core';
import {IAnimal} from "../../models/interfaces/animal";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../modals/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: IAnimal[];
  @Input() displayedColumns: string[];

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  edit(animal: IAnimal) {

  }

  remove(animal: IAnimal) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {

      }
    });
  }

}
