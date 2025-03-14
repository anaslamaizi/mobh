// guide.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
})
export class GuideComponent {
  showGuide = false;
  solution: string | null = null;

  questions = [
    {
      text: 'Question 1',
      options: ['Option 1A', 'Option 1B', 'Option 1C'],
    },
    {
      text: 'Question 2',
      options: ['Option 2A', 'Option 2B', 'Option 2C'],
    },
    {
      text: 'Question 3',
      options: ['Option 3A', 'Option 3B', 'Option 3C'],
    },
    {
      text: 'Question 4',
      options: ['Option 4A', 'Option 4B', 'Option 4C'],
    },
  ];

  answers: string[] = new Array(this.questions.length).fill(null);

  onSelectAnswer(questionIndex: number, answer: string) {
    this.answers[questionIndex] = answer;
  }

  submitAnswers() {
    // Logique de décision simple pour choisir une solution
    // Ici on peut imaginer que certaines réponses conduisent à certaines solutions

    if (this.answers.includes('Option 1A') || this.answers.includes('Option 2A')) {
      this.solution = 'SPP';
    } else if (this.answers.includes('Option 3B') || this.answers.includes('Option 4B')) {
      this.solution = 'PSO';
    } else {
      this.solution = 'GA';
    }
  }
}
