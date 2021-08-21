import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DashboardRoutes} from "./dashboard.routes";
import {MatCardModule} from "@angular/material/card";
import { DashCardComponent } from './components/dash-card/dash-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashCardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutes,
        MatCardModule
    ]
})
export class DashboardModule { }
