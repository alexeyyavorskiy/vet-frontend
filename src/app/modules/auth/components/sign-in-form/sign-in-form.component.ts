import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MIN_LENGTH_VALIDATION} from "../../../shared/models/constants/constants";
import {ICredentials} from "../../../shared/models/interfaces/credentials";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../shared/services/message.service";
import {MessageTypes} from "../../../shared/models/enums/message-types";
import {HttpErrorResponse} from "@angular/common/http";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/models/abstracts/unsubscribe-on-destroy-adapter.directive";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  public form: FormGroup;
  public hide = true;
  // public formSubmitted: boolean;
  // public matcher: CustomErrorStateMatcher;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private messageService: MessageService,
              private router: Router) {
    // this.matcher = new CustomErrorStateMatcher();
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(MIN_LENGTH_VALIDATION)])]
    })
  }

  signIn(credentials: ICredentials) {
    this.subscriptions.sink = this.authService.signIn(credentials).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, (err: HttpErrorResponse) => {
      this.messageService.showMessage(err.error.message, null, MessageTypes.ERROR);
    });
  }

  goToSignUp() {
    this.router.navigate(['/sign-up'])
  }

}
