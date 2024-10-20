import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginAuthService } from '../services/loginAuth/login-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginAuthService, private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('authToken')
    console.log(token)

    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
