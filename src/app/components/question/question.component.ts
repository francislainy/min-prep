import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AsyncPipe, NgClass],
  template: `
    <div class="question-container">
      <a [href]="(currentQuestion$ | async)?.url ? 'https://www.jw.org' + (currentQuestion$ | async)?.url : 'https://www.jw.org/en/bible-teachings/questions/'">
      <div
          class="speech-bubble"
          [ngClass]="(animationState$ | async) || ''"
        >
        <span class="category">
          {{ (currentQuestion$ | async)?.category }}
        </span>
          <p class="question">{{ (currentQuestion$ | async)?.question }}</p>
        </div>
      </a>
    </div>
  `,
  styles: [`
    .question-container {
      position: relative;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0;
    }

    .speech-bubble {
      position: relative;
      background: var(--bubble);
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 4px 6px var(--shadow);
      width: 90%;
      margin-right: 10px;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.6;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .speech-bubble:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-top-color: var(--bubble);
      border-bottom: 0;
      margin-left: -20px;
      margin-bottom: -20px;
    }

    .speech-bubble.active {
      opacity: 1;
      transform: translateY(0);
    }

    .speech-bubble.exit {
      opacity: 0;
      transform: translateY(-20px);
    }

    .category {
      position: absolute;
      top: -10px;
      left: 20px;
      background-color: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      z-index: 1;
    }

    .question {
      margin-top: 10px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 640px) {
      .speech-bubble {
        font-size: 1.125rem;
        padding: 1.25rem;
      }
    }
  `]
})
export class QuestionComponent implements OnInit {
  currentQuestion$!: Observable<Question | null>;
  animationState$!: Observable<'active' | 'exit' | 'none'>;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.currentQuestion$ = this.questionService.currentQuestion$;
    this.animationState$ = this.questionService.animationState$;
  }
}
