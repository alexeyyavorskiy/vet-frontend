import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPet} from "../../../models/interfaces/pet";
import {AnimalsService} from "../../../services/animals.service";
import {IAnimal} from "../../../models/interfaces/animal";
import {UnsubscribeOnDestroyAdapter} from "../../../models/abstracts/unsubscribe-on-destroy-adapter.directive";

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.scss']
})
export class AnimalDialogComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  public ownerForm: FormGroup;
  public addressForm: FormGroup;
  public isLoading: boolean;
  public speciesForm: FormGroup;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AnimalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {animal: IPet},
              private animalsService: AnimalsService
  ) {
    super()
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      country: [this.data?.animal?.owner?.address?.country, Validators.required],
      city: [this.data?.animal?.owner?.address?.city, Validators.required],
      street: [this.data?.animal?.owner?.address?.street, Validators.required],
      zipCode: [this.data?.animal?.owner?.address?.zipCode, Validators.required],
    });
    this.speciesForm = this.fb.group({
      label: [this.data?.animal?.species?.label, Validators.required]
    });
    this.ownerForm = this.fb.group({
      fullName: [this.data?.animal?.owner?.fullName, Validators.compose([Validators.required, Validators.minLength(3)])],
      address: this.addressForm
    });
    this.form = this.fb.group({
      birthDay: [this.data?.animal?.birthDay, Validators.required],
      vaccinated: [this.data?.animal?.vaccinated],
      owner: this.ownerForm,
      species: this.speciesForm
    });

  }

  public submit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.subscriptions.sink = (this.data?.animal ? this.animalsService.updateAnimal({...this.data?.animal, ...this.form.value}) :
        this.animalsService.createAnimal(this.form.value))
        .subscribe((animal: IAnimal) => {
          this.dialogRef.close(animal);
        })
    }
  }

}
