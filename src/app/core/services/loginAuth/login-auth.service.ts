import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Pipe } from '@angular/core';
import { loginResponse } from '../../models/loginResponse.model';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  URL = 'https://localhost:7158/login'
  Response!: loginResponse;
  constructor(private httpClient: HttpClient) { }


  post(email: string, password: string): Observable<loginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      "email": email,
      "password": password
    }


    return this.httpClient.post<loginResponse>(this.URL, body, { headers }).pipe(
      tap((response: loginResponse) => {
        localStorage.setItem('authToken', response.token);
        this.Response = response;
      }),
    );
  }

  getToken() {
    return this.Response.token
  }
}
