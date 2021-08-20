import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildsComponent } from './components/wilds/wilds.component';
import {WildsRoutes} from "./wilds.routes";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    WildsComponent
  ],
    imports: [
        CommonModule,
        WildsRoutes,
        SharedModule
    ]
})
export class WildsModule { }
