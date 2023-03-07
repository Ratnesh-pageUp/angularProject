import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
    });

    // unauthorized requests .

    if (request.headers.get('skip')) {
      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            this.toastrService.error('Some error occurred , Please retry.');
          } else {
            if (error.status == 500) {
              // Unprocessable internal server error
              this.toastrService.error(error.error.message);
            } else if (error.status == 422 && error.error) {
              // Unprocessable Content response
            } else {
              this.toastrService.error('Some error occurred , Please retry.');
            }
          }
          return throwError(error);
        })
      );
    }

    // Authorized requests .

    const authorizedReq = modifiedReq.clone({
      headers: modifiedReq.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem(environment.tokenName)}`
      ),
    });

    return next.handle(authorizedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          this.toastrService.error('Some error occurred , Please retry.');
        } else {
          if (error.status == 500 || error.status == 401) {
            if (error.status == 401) {
              // Unauthorized response
              this.toastrService.error(error.error.message);
              this.authService.logout();
            }
          } else if (error.status == 422 && error.error) {
            // Unprocessable Content response
          } else {
            this.toastrService.error('Some error occurred , Please retry.');
          }
        }
        return throwError(error);
      })
    );
  }
}
