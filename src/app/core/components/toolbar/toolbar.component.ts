import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    MatTooltip
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = 'ACM JUSC Admin Portal';

  collapsedChanged = output();
  router = inject(Router);

  toggleSideNav() {
    this.collapsedChanged.emit();
  }

  isLoginPage(): boolean {
    return this.router.url == '/login'
  }
}
