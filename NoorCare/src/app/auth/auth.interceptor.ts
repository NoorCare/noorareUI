import { HttpInterceptor, HttpRequest,
     HttpHandler, HttpEvent, 
    HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if(localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .pipe(
                    tap((ev: HttpEvent<any>) => {
                        if (ev instanceof HttpResponse) {
                            console.log('processing response', ev);
                        }
                    }),
                    catchError(response => {
                        if (response instanceof HttpErrorResponse) {
                            console.log('Processing http error', response)
                        }
                        return throwError(response);
                    })
                );
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}