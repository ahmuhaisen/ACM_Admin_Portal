import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAuthService } from '../../core/services/loginAuth/login-auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  // use validators
  loginForm!: FormGroup

  loginResponse!: Observable<any>
  
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginAuthService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['',],
      password: ['']
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['dashboard'])

    }
  }
  onSubmit() {
    let email = this.loginForm.get('email')?.value
    let password = this.loginForm.get('password')?.value

    // 3aib 3alai etha mish min ChatGPT
    // Read about: xxx.subscribe({error: ..., next: ..., complete: ...})
    this.loginService.post(email, password).pipe(
      tap((response) => {
        if (response.isAuthenticated) {
          this.router.navigate(['dashboard']);
        }
      }),
      catchError((error) => {
        this.handleErrorResponse(error);
        return of(null);
      })
    ).subscribe();
  }
  private handleErrorResponse(errorResponse: HttpErrorResponse) {
    // TODO: Show an error alert
    return errorResponse;
  }
}
