import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./modules/auth/components/sign-in/sign-in.component";
import {PageNames} from "./modules/shared/models/enums/page-names";
import {SignUpComponent} from "./modules/auth/components/sign-up/sign-up.component";
import {AuthGuard} from "./auth.guard";
import {LoginGuard} from "./login.guard";

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
    },
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      title: PageNames.SIGN_UP,
    },
    canActivate: [LoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pets',
    loadChildren: () => import('../app/modules/pets/pets.module').then(m => m.PetsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'wilds',
    loadChildren: () => import('../app/modules/wilds/wilds.module').then(m => m.WildsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'owners',
    loadChildren: () => import('../app/modules/owners/owners.module').then(m => m.OwnersModule),
    canActivate: [AuthGuard]
  },
  REDIRECT_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
