import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IOwner} from "../../../shared/models/interfaces/owner";
import {ConfirmationDialogComponent} from "../../../shared/components/modals/confirmation-dialog/confirmation-dialog.component";
import {OwnersService} from "../../owners.service";

@Component({
  selector: 'app-owners-table',
  templateUrl: './owners-table.component.html',
  styleUrls: ['./owners-table.component.scss']
})
export class OwnersTableComponent implements OnInit {

  @Input() list: IOwner[];
  @Input() displayedColumns: string[];

  constructor(private matDialog: MatDialog,
              private ownersService: OwnersService) {
  }

  ngOnInit(): void {
  }

  edit(owner: IOwner) {

  }

  remove(owner: IOwner) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.ownersService.removeOwner(owner.id).subscribe(res => {
          console.log(res);
        })
      }
    });
  }

}
