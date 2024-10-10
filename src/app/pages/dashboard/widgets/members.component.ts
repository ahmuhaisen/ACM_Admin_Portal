import { Component } from '@angular/core';

@Component({
  selector: 'app-chapter-summary',
  standalone: true,
  imports: [],
  template: `

  <p class="main-content">+49</p>

  <span class="description">
    distributed over 4 sections
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
export class MembersComponent {

}
