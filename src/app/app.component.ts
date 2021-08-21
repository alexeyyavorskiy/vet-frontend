import {Component, OnInit} from '@angular/core';
import {pages} from "./modules/shared/models/constants/constants";
import {TokenService} from "./modules/auth/services/token.service";
import {ActivatedRouteSnapshot, ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {PageNames} from "./modules/shared/models/enums/page-names";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vet-frontend';
  public pages = pages;
  public showMenu: boolean;

  constructor(public tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        map((route: ActivationEnd) => route.snapshot),
        filter((snap: ActivatedRouteSnapshot) => snap.data.title),
      ).subscribe((snap: ActivatedRouteSnapshot) => {
      this.showMenu = snap.data.title !== PageNames.DASHBOARD;
    });
  }

}
