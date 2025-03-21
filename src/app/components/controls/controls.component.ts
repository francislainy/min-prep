import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="controls">
      <button (click)="onNextQuestion()">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        Next Question
      </button>
    </div>

    <div class="progress-container">
      <div
        class="progress-bar"
        [style.width.%]="(progress$ | async) || 0"
      ></div>
    </div>
  `,
  styles: [`
    .controls {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    button {
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: var(--primary-light);
      transform: translateY(-2px);
    }

    button:active {
      transform: translateY(0);
    }

    .button-icon {
      width: 20px;
      height: 20px;
    }

    .progress-container {
      width: 100%;
      height: 6px;
      background-color: #e5e7eb;
      border-radius: 3px;
      margin-top: 2rem;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background-color: var(--primary);
      width: 0;
      transition: width 0.3s ease;
    }
  `]
})
export class ControlsComponent implements OnInit {
  progress$!: Observable<number>;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.progress$ = this.questionService.progress$;
  }

  onNextQuestion(): void {
    this.questionService.getNextQuestion();
  }
}
