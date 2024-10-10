import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../models/menu-item.model';
import {MatTooltipModule} from '@angular/material/tooltip';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";


@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MenuItemComponent
],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(true);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'menu_book',
      label: 'Magazine',
      route: 'magazine',
      subItems: [
        {
          icon: 'summarize',
          label: 'Overview',
          route: 'overview'
        },
        {
          icon: 'book_5',
          label: 'Issues',
          route: 'issues'
        },
        {
          icon: 'book_ribbon',
          label: 'Articles',
          route: 'articles'
        },
        {
          icon: 'manage_accounts',
          label: 'Volunteers',
          route: 'volunteers'
        }
      ]
    },
    {
      icon: 'group',
      label: 'Users Management',
      route: 'users'
    },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}