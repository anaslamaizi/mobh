import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Solution {
  ListJobs: number[][];
  t: number[];
  xa: number[];
  xb: number[];
  OF: number;
}

@Component({
  selector: 'app-result-pso',
  templateUrl: './result-pso.component.html',
  styleUrls: ['./result-pso.component.scss']
})
export class ResultPsoComponent implements AfterViewInit {

  solution: Solution | undefined;
  timeTotal: number = 0;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.loadSolution();
  }

  private loadSolution() {
    this.http.get<{ Solution: Solution }>('assets/result-pso.json')
      .subscribe(data => {
        this.solution = data.Solution;
        if (this.solution) {
          this.timeTotal = this.solution.t.reduce((acc, time) => acc + time, 0);
        }
      });
  }
}
