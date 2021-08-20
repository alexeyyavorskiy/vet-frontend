import {Route, RouterModule} from "@angular/router";
import {PageNames} from "../shared/models/enums/page-names";
import {NgModule} from "@angular/core";
import {WildsComponent} from "./components/wilds/wilds.component";

const routes: Route[] = [
  {
    path: '',
    component: WildsComponent,
    data: {
      title: PageNames.WILDS,
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WildsRoutes {
}
