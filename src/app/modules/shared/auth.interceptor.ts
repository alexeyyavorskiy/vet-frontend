import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


import {throwError} from 'rxjs/internal/observable/throwError';
import {TokenService} from "../auth/services/token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    let headers = {};

    if (!!token) {
      headers = {
        Authorization: token
      };
    }

    const cacheControlParamName = 'cache-control';
    if (request.headers && request.headers.has(cacheControlParamName)) {
      headers[cacheControlParamName] = request.headers.get(cacheControlParamName);
    }

    const authenticatedRequest = request.clone({
      setHeaders: headers
    });

    return next.handle(authenticatedRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError(
        (err: HttpErrorResponse) => {
          if (!(err.error instanceof Error) && err.status === 401) {
            this.tokenService.removeToken();
            this.router.navigate(['/sign-in']);
          }
          return throwError(err);
        }
      ));
  }
}
