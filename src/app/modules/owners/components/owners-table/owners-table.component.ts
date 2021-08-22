import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IOwner} from "../../../shared/models/interfaces/owner";
import {ConfirmationDialogComponent} from "../../../shared/components/modals/confirmation-dialog/confirmation-dialog.component";
import {OwnersService} from "../../owners.service";
import {OwnerDialogComponent} from "../owner-dialog/owner-dialog.component";

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
    const ref = this.matDialog.open(OwnerDialogComponent, {
      width: '600px',
      data: {owner}
    });

    ref.afterClosed().subscribe((updatedOwner: IOwner) => {
      if (updatedOwner) {
        const foundOwner = this.list.find(o => o.id === owner.id);
        if (foundOwner) {
          this.list.splice(this.list.indexOf(foundOwner), 1, updatedOwner);
          this.list = [...this.list];
        }
      }
    });
  }

  create() {
    const ref = this.matDialog.open(OwnerDialogComponent, {
      width: '600px',
      data: {}
    });

    ref.afterClosed().subscribe((createdOwner: IOwner) => {
      if (createdOwner) {
        this.list.unshift(createdOwner);
        this.list = [...this.list];
      }
    });
  }

  remove(owner: IOwner) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.ownersService.removeOwner(owner.id).subscribe(owner => {
          this.list = this.list.filter(o => o.id !== owner.id);
        })
      }
    });
  }

}
