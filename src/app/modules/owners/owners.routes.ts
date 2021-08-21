import {Route, RouterModule} from "@angular/router";
import {PageNames} from "../shared/models/enums/page-names";
import {NgModule} from "@angular/core";
import {OwnersComponent} from "./components/owners/owners.component";

const routes: Route[] = [
  {
    path: '',
    component: OwnersComponent,
    data: {
      title: PageNames.OWNERS,
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnersRoutes {
}
