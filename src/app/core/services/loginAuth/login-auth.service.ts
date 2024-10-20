import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { loginResponse } from '../../models/loginResponse.model';
import { signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { loginRequest } from '../../models/loginRequest';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  endpoint = '/login';
  Response = signal<loginResponse | null>(null);

  constructor(private httpClient: HttpClient) { }


  post(email: string, password: string): Observable<loginResponse> {

    const body = <loginRequest>{
      email: email,
      password: password
    }

    return this.httpClient.post<loginResponse>(
      environment.domain + this.endpoint, body).pipe(
        tap((response: loginResponse) => {
          localStorage.setItem('authToken', response.token);
          this.Response.set(response)
        }),
      );

  }

  getToken() {
    return this.Response()
  }
}
