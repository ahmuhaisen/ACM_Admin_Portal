import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Pipe } from '@angular/core';
import { loginResponse } from '../../models/loginResponse.model';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  URL = 'https://localhost:7158/login'; // search for environments in angular
  Response!: loginResponse;
  constructor(private httpClient: HttpClient) { }

  // store the authenticated user data here as a signal
  // ...

  post(email: string, password: string): Observable<loginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Not needed
    const body = {
      "email": email,
      "password": password
    } // make it strongly typed (e.g. (interface) => LoginRequest)


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
