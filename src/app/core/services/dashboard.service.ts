import { Widget } from '../models/widget.model';
import { Injectable, signal } from '@angular/core';

import { MagazineSummaryComponent } from '../../pages/dashboard/widgets/magazine-summary.component';
import { MembersComponent } from '../../pages/dashboard/widgets/members.component';
import { TrainingsComponent } from '../../pages/dashboard/widgets/trainings.component';
import { YearsComponent } from '../../pages/dashboard/widgets/years.component';

@Injectable()
export class DashboardService {

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Magazine',
      icon: 'book',
      content: MagazineSummaryComponent,
      backgroundColor: 'var(--primary-color)',
      color: 'whitesmoke'
    },
    {
      id: 2,
      label: 'Members',
      icon: 'person',
      content: MembersComponent,
      backgroundColor: 'var(--primary-color-dark)',
      color: 'whitesmoke'
    },
    {
      id: 3,
      label: 'Trainings & Contests',
      icon: 'dvr',
      content: TrainingsComponent,
      backgroundColor: 'var(--secondary-color)',
      color: 'whitesmoke'
    },
    {
      id: 4,
      label: 'Since',
      icon: 'calendar_today',
      content: YearsComponent,
      backgroundColor: 'var(--primary-color-light)',
      color: 'whitesmoke'
    }
  ]);
  
}
