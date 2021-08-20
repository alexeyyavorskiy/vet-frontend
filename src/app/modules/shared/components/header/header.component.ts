import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../auth/services/token.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              public tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public signOut() {
    this.authService.signOut().subscribe(res => {
      console.log(res);
      this.router.navigate(['/sign-in']);
    })
  }

}
