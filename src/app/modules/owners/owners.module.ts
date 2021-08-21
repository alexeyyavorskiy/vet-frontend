import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './components/owners/owners.component';
import {OwnersRoutes} from "./owners.routes";



@NgModule({
  declarations: [
    OwnersComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutes
  ]
})
export class OwnersModule { }
