import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { WidgetComponent } from "../../core/components/widget/widget.component";
import { Widget } from '../../core/models/widget.model';
import { DashboardService } from '../../core/services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    WidgetComponent
  ],
  providers: [
    DashboardService
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  store = inject(DashboardService);
}
