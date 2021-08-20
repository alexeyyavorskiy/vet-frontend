import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './components/pets/pets.component';
import {PetsRoutes} from "./pets.routes";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PetsComponent
  ],
    imports: [
        CommonModule,
        PetsRoutes,
        SharedModule
    ]
})
export class PetsModule { }
