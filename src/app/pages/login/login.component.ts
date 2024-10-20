import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAuthService } from '../../core/services/loginAuth/login-auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  loginResponse!: Observable<any>
  validSubmit: boolean = true;
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginAuthService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['dashboard'])

    }
  }
  onSubmit() {
    this.validSubmit = this.loginForm.valid
    if (!this.validSubmit)
      return
    let email = this.loginForm.get('email')?.value
    let password = this.loginForm.get('password')?.value


    this.loginService.post(email, password).subscribe({
      next: (response) => {
        if (response.isAuthenticated)
          this.router.navigate(['dashboard']);
      },
      error: (errorMessage) => {
        this.validSubmit = false;
        this.handleErrorResponse(errorMessage);
      },
      complete: () => {
      }

    })


  }
  private handleErrorResponse(errorResponse: HttpErrorResponse) {
    console.log(errorResponse.error)
  }
}
