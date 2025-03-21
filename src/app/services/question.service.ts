import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsDB: Question[] = [
    // Science
    { category: "Science", question: "Explain how photosynthesis works in simple terms." },
    { category: "Science", question: "What's the difference between DNA and RNA?" },
    { category: "Science", question: "How do vaccines work to protect us from diseases?" },
    { category: "Science", question: "Why is the sky blue?" },
    { category: "Science", question: "Explain the concept of gravity in your own words." },

    // History
    { category: "History", question: "What were the main causes of World War II?" },
    { category: "History", question: "How did the Industrial Revolution change society?" },
    { category: "History", question: "Explain the significance of the Civil Rights Movement." },
    { category: "History", question: "What impact did the printing press have on society?" },
    { category: "History", question: "Describe the fall of the Roman Empire and its consequences." },

    // Technology
    { category: "Technology", question: "How does artificial intelligence learn from data?" },
    { category: "Technology", question: "Explain how the internet works to someone who doesn't know." },
    { category: "Technology", question: "What are the ethical concerns around facial recognition?" },
    { category: "Technology", question: "How has social media changed human communication?" },
    { category: "Technology", question: "What is blockchain technology and why is it important?" },

    // Philosophy
    { category: "Philosophy", question: "What does it mean to live a good life?" },
    { category: "Philosophy", question: "Is there such a thing as objective truth?" },
    { category: "Philosophy", question: "How do you define consciousness?" },
    { category: "Philosophy", question: "What is the relationship between freedom and responsibility?" },
    { category: "Philosophy", question: "Can morality exist without religion?" },

    // Arts
    { category: "Arts", question: "How does art reflect the society in which it was created?" },
    { category: "Arts", question: "What makes a piece of music 'good'?" },
    { category: "Arts", question: "How has film changed storytelling in the modern era?" },
    { category: "Arts", question: "Why is Shakespeare still relevant today?" },
    { category: "Arts", question: "How do different cultures express beauty through their art?" },

    // Current Events
    { category: "Current Events", question: "How is climate change affecting global politics?" },
    { category: "Current Events", question: "What are the pros and cons of remote work?" },
    { category: "Current Events", question: "How is technology changing healthcare delivery?" },
    { category: "Current Events", question: "What are the challenges of misinformation in today's media?" },
    { category: "Current Events", question: "How are changing demographics affecting society?" },

    // Personal Growth
    { category: "Personal Growth", question: "How do you handle criticism constructively?" },
    { category: "Personal Growth", question: "What strategies help you manage stress effectively?" },
    { category: "Personal Growth", question: "How do you approach making difficult decisions?" },
    { category: "Personal Growth", question: "What does work-life balance mean to you?" },
    { category: "Personal Growth", question: "How do you build and maintain meaningful relationships?" },

    // Business
    { category: "Business", question: "What makes a good leader in today's workplace?" },
    { category: "Business", question: "How do you approach problem-solving in a team environment?" },
    { category: "Business", question: "What are the ethical considerations in modern business?" },
    { category: "Business", question: "How do you adapt to rapid change in an organization?" },
    { category: "Business", question: "What role does innovation play in business success?" }
  ];

  private usedQuestions: number[] = [];
  private currentQuestionIndex = -1;

  // Observables for components to subscribe to
  private currentQuestionSubject = new BehaviorSubject<Question | null>(null);
  currentQuestion$ = this.currentQuestionSubject.asObservable();

  private animationStateSubject = new BehaviorSubject<'active' | 'exit' | 'none'>('none');
  animationState$ = this.animationStateSubject.asObservable();

  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  constructor() {
    // Initialize with welcome message
    this.currentQuestionSubject.next({
      category: 'General Knowledge',
      question: 'Click "Next Question" to start your practice session!'
    });

    // Initialize with active class after a short delay
    setTimeout(() => {
      this.animationStateSubject.next('active');
    }, 300);
  }

  getNextQuestion(): void {
    // Start exit animation
    this.animationStateSubject.next('exit');

    setTimeout(() => {
      // Get new question
      this.currentQuestionIndex = this.getRandomQuestionIndex();
      const questionData = this.questionsDB[this.currentQuestionIndex];

      // Update current question
      this.currentQuestionSubject.next(questionData);

      // Reset animation state
      this.animationStateSubject.next('none');

      // Force reflow to restart animation by setting to none first
      setTimeout(() => {
        this.animationStateSubject.next('active');
      }, 10);

      // Update progress
      this.updateProgress();
    }, 500);
  }

  private getRandomQuestionIndex(): number {
    // Reset used questions if we've gone through most of them
    if (this.usedQuestions.length >= this.questionsDB.length * 0.7) {
      this.usedQuestions = [];
    }

    // Filter out used questions
    const availableIndices = Array.from(
      { length: this.questionsDB.length },
      (_, i) => i
    ).filter(index => !this.usedQuestions.includes(index));

    // If somehow all questions are used, just pick a random one
    if (availableIndices.length === 0) {
      return Math.floor(Math.random() * this.questionsDB.length);
    }

    // Get random index from available questions
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const questionIndex = availableIndices[randomIndex];

    this.usedQuestions.push(questionIndex);
    return questionIndex;
  }

  private updateProgress(): void {
    const progress = (this.usedQuestions.length / this.questionsDB.length) * 100;
    this.progressSubject.next(progress);
  }
}
