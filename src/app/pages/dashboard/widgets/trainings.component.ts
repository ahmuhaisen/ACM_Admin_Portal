import { Component } from '@angular/core';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [],
  template: `

  <p class="main-content">+29</p>

  <span class="description">
    with over 2000 attendees
  </span>

  `,
  styles: `
  
  .main-content {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    font-weight: 600;
  }

  .description {
    font-size: 0.8rem;
    font-weight: 300;
  }
  `
})
export class TrainingsComponent {

}
