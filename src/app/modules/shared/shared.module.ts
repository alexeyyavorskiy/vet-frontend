import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalTableComponent} from './components/table/animal-table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmationDialogComponent } from './components/modals/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import { AnimalDialogComponent } from './components/modals/animal-dialog/animal-dialog.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AnimalTableComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    AnimalDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    RouterModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    AnimalTableComponent,
    HeaderComponent,
    FooterComponent,
    AnimalDialogComponent
  ]

})
export class SharedModule {
}
