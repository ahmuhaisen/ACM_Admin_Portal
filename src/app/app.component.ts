import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CustomSidenavComponent } from "./core/components/custom-sidenav/custom-sidenav.component";
import { MatTooltip } from '@angular/material/tooltip';
import { ToolbarComponent } from "./core/components/toolbar/toolbar.component";
import { LoginComponent } from './pages/login/login.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    MatTooltip,
    ToolbarComponent,
    LoginComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router) { }
  collapsed = signal(false);

  sideNavWidth = computed(() => this.collapsed() ? '65px' : '270px');

  ngAfterViewInit() {

    if (window.innerWidth < 600) {
      this.collapsed.set(true);
    }

  }

  onToggleCollapsed() {
    this.collapsed.set(!this.collapsed());
  }

  isLoginPage(): boolean {
    return this.router.url == '/login'
  }
}

