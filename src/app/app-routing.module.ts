import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./modules/auth/components/sign-in/sign-in.component";
import {PageNames} from "./modules/shared/models/enums/page-names";

const REDIRECT_ROUTE: Route = {
  path: '**',
  redirectTo: ''
};
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {
      title: PageNames.SIGN_IN,
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('../app/modules/pets/pets.module').then(m => m.PetsModule)
  },
  {
    path: 'wilds',
    loadChildren: () => import('../app/modules/wilds/wilds.module').then(m => m.WildsModule)
  },
  REDIRECT_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
