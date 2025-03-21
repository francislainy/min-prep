import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>Practice answering questions on the fly to improve your critical thinking skills.</p>
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 1rem;
      color: #6b7280;
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent {}
