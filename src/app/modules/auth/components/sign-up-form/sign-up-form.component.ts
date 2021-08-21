import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {MIN_LENGTH_VALIDATION} from "../../../shared/models/constants/constants";
import {ICredentials} from "../../../shared/models/interfaces/credentials";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageTypes} from "../../../shared/models/enums/message-types";
import {MessageService} from "../../../shared/services/message.service";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  public form: FormGroup;
  public hide = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(MIN_LENGTH_VALIDATION)])]
    })
  }

  goToSignIn() {
    this.router.navigate(['/sign-in'])
  }

  signUp(credentials: ICredentials) {
    this.authService.signUp(credentials).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, (err: HttpErrorResponse) => {
      this.messageService.showMessage(err.error.message, null, MessageTypes.ERROR);
    });
  }
}
