import {Route, RouterModule} from "@angular/router";
import {PageNames} from "../shared/models/enums/page-names";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: PageNames.DASHBOARD,
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutes {
}
