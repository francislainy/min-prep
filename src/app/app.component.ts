import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { QuestionComponent } from './components/question/question.component';
import { ControlsComponent } from './components/controls/controls.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    QuestionComponent,
    ControlsComponent,
    FooterComponent,
    ThemeToggleComponent
  ],
  template: `
    <div class="settings">
      <app-theme-toggle></app-theme-toggle>
    </div>

    <div class="container">
      <app-header></app-header>
      <app-question></app-question>
      <app-controls></app-controls>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: var(--text);
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: background-color 0.3s ease;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .settings {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 0.5rem;
    }

    @media (max-width: 640px) {
      .container {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
}
