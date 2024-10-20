import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authToken = localStorage.getItem('authToken')
  let updateReq = req.clone({
    setHeaders: { Authorization: `Bearer ${authToken}` }
  })
  return next(updateReq);
};
