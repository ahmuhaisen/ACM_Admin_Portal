import { Component, input } from '@angular/core';
import { Widget } from '../../models/widget.model';
import { NgComponentOutlet } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    NgComponentOutlet,
    MatIcon
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  data = input.required<Widget>();
}
