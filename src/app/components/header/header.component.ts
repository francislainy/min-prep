import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>On-the-Fly Question Practice</h1>
      <p class="description">
        Improve your ability to think quickly by answering random questions from various subjects.
        Click "Next Question" to continue.
      </p>
    </header>
  `,
  styles: [`
    header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .description {
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }
  `]
})
export class HeaderComponent {}
