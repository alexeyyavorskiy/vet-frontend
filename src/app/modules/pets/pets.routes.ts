import {Route, RouterModule} from "@angular/router";
import {PetsComponent} from "./components/pets/pets.component";
import {PageNames} from "../shared/models/enums/page-names";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {
    path: '',
    component: PetsComponent,
    data: {
      title: PageNames.PETS,
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutes {
}
