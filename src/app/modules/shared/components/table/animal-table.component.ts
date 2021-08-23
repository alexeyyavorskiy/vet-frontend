import {Component, Input, OnInit} from '@angular/core';
import {IAnimal} from "../../models/interfaces/animal";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../modals/confirmation-dialog/confirmation-dialog.component";
import {AnimalsService} from "../../services/animals.service";
import {AnimalDialogComponent} from "../modals/animal-dialog/animal-dialog.component";
import {OwnersService} from "../../../owners/owners.service";
import {UnsubscribeOnDestroyAdapter} from "../../models/abstracts/unsubscribe-on-destroy-adapter.directive";

@Component({
  selector: 'app-table',
  templateUrl: './animal-table.component.html',
  styleUrls: ['./animal-table.component.scss']
})
export class AnimalTableComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  @Input() list: IAnimal[];
  @Input() displayedColumns: string[];

  constructor(private matDialog: MatDialog,
              private animalsService: AnimalsService,
              private ownersService: OwnersService) {
    super();
  }

  ngOnInit(): void {
  }

  edit(animal: IAnimal | any) {
    if (animal.ownerId) {
      this.subscriptions.sink = this.ownersService.getById(animal.ownerId).subscribe(owner => {
        animal.owner = owner;
        const ref = this.matDialog.open(AnimalDialogComponent, {
          width: '600px',
          data: {animal}
        });

        this.subscriptions.sink = ref.afterClosed().subscribe((updatedAnimal: IAnimal) => {
          if (updatedAnimal) {
            const foundAnimal = this.list.find(o => o.id === animal.id);
            if (foundAnimal) {
              this.list.splice(this.list.indexOf(foundAnimal), 1, updatedAnimal);
              this.list = [...this.list];
            }
          }
        });
      })
    }
  }

  create() {
    const ref = this.matDialog.open(AnimalDialogComponent, {
      width: '600px',
      data: {}
    });

    this.subscriptions.sink = ref.afterClosed().subscribe((createdAnimal: IAnimal) => {
      if (createdAnimal) {
        this.list.unshift(createdAnimal);
        this.list = [...this.list];
      }
    });
  }

  remove(animal: IAnimal) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);

    this.subscriptions.sink = ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.subscriptions.sink = this.animalsService.removeAnimal(animal.id).subscribe(animal => {
          this.list = this.list.filter(o => o.id !== animal.id);
        })
      }
    });
  }

}
