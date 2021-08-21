import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmationDialogComponent } from './components/modals/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
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
        RouterModule
    ],
  exports: [
    TableComponent,
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedModule {
}
