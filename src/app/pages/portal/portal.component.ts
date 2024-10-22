import { CommonModule, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../../core/components/custom-sidenav/custom-sidenav.component';
import { MatTooltip } from '@angular/material/tooltip';
import { ToolbarComponent } from '../../core/components/toolbar/toolbar.component';

@Component({
  selector: 'app-portal',
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
    NgIf
  ],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'

})
export class PortalComponent {
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
}
