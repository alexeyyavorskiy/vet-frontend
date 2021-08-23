import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IOwner} from "../../../shared/models/interfaces/owner";
import {OwnersService} from "../../owners.service";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/models/abstracts/unsubscribe-on-destroy-adapter.directive";

@Component({
  selector: 'app-owner-dialog',
  templateUrl: './owner-dialog.component.html',
  styleUrls: ['./owner-dialog.component.scss']
})
export class OwnerDialogComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  public form: FormGroup;
  public addressForm: FormGroup;
  public isLoading: boolean;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<OwnerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { owner: IOwner },
              private ownersService: OwnersService
  ) {
    super();
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      country: [this.data?.owner?.address?.country, Validators.required],
      city: [this.data?.owner?.address?.city, Validators.required],
      street: [this.data?.owner?.address?.street, Validators.required],
      zipCode: [this.data?.owner?.address?.zipCode, Validators.required],
    });
    this.form = this.fb.group({
      fullName: [this.data?.owner?.fullName, Validators.compose([Validators.required, Validators.minLength(3)])],
      address: this.addressForm
    })
  }

  public submit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.subscriptions.sink = (this.data?.owner ? this.ownersService.updateOwner({...this.data?.owner, ...this.form.value}) :
        this.ownersService.createOwner(this.form.value))
        .subscribe((owner: IOwner) => {
          this.dialogRef.close(owner);
        })
    }
  }

}
