import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './components/owners/owners.component';
import {OwnersRoutes} from "./owners.routes";
import {OwnersTableComponent} from "./components/owners-table/owners-table.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { OwnerDialogComponent } from './components/owner-dialog/owner-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OwnersComponent,
    OwnersTableComponent,
    OwnerDialogComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutes,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
