import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpBaseInterceptor implements HttpBaseInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'https://localhost:5001';
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}
