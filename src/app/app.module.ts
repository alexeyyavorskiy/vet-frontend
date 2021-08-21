import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./modules/auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./modules/shared/auth.interceptor";
import {SharedModule} from "./modules/shared/shared.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
