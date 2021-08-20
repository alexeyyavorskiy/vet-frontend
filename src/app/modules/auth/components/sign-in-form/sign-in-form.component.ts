import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MIN_LENGTH_VALIDATION} from "../../../shared/models/constants/constants";
import {ICredentials} from "../../../shared/models/interfaces/credentials";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  public form: FormGroup;
  public hide: boolean;
  // public formSubmitted: boolean;
  // public matcher: CustomErrorStateMatcher;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
    // this.matcher = new CustomErrorStateMatcher();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(MIN_LENGTH_VALIDATION)])]
    })
  }

  onSubmit(credentials: ICredentials) {
    this.authService.signIn(credentials).subscribe((res: any) => {
      this.router.navigate(['/dashboard']);
    });
  }

}
