import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './components/owners/owners.component';
import {OwnersRoutes} from "./owners.routes";
import {OwnersTableComponent} from "./components/owners-table/owners-table.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    OwnersComponent,
    OwnersTableComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutes,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class OwnersModule { }
