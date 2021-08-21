import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenService} from "./modules/auth/services/token.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.tokenService.getToken()) {
            this.tokenService.saveUserId();
            return true;
        } else {
            this.router.navigate([`/sign-in`], {queryParams: route.queryParams});
            return false;
        }
    }
}
