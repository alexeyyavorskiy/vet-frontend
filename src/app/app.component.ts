import {Component} from '@angular/core';
import {pages} from "./modules/shared/models/constants/constants";
import {TokenService} from "./modules/auth/services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vet-frontend';
  public pages = pages;

  constructor(public tokenService: TokenService) {
  }

}
