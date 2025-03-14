import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from "../spinner/spinner.component";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    SpinnerComponent
],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  algorithm: string =  this.dataService.getMethod();
  distance: any;
  time: any;
  solution: any;
  consumption: any;
  risk: any;
  result: any;
  iframeUrl: string = 'http://localhost:5000/spp.png';
  iframeLoaded: boolean = false;
  loading: boolean = true;
  errorMessage: string | null = null;
  retryInterval: number = 3000; // Temps de réessai en millisecondes (3 secondes)

  constructor(private router: Router, private http: HttpClient, public dataService: DataService) {}

  ngOnInit() {
    this.loading = true;
    this.checkIframeUrl();
    this.dataService.fetchResults().subscribe(
      (result: any) => {
        console.log(`Result in results:`, result);
        this.result = result;
        if (this.result) {
          this.loading = false;
          this.distance = this.result.distance;
          this.time = this.result.time_taken;
          this.consumption = this.result.consumption;
          this.risk = this.result.risk;
          this.solution = this.result.route;
          console.log(`Distance in results: ${this.distance}`);
          console.log(`Time in results: ${this.time}`);
          console.log(`Consumption in results: ${this.consumption}`);
          console.log(`Risk in results: ${this.risk}`);
        }
      },
      (error: any) => {
        console.error('Error fetching results:', error);
        this.loading = false;
      }
    );
  }

  checkIframeUrl() {
    this.http.head(this.iframeUrl, { observe: 'response' })
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.iframeLoaded = true;
            this.loading = false;
          } else {
            this.retryCheckIframeUrl();
          }
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.retryCheckIframeUrl();
          } else {
            this.errorMessage = 'Une erreur est survenue.';
            this.loading = false;
          }
        }
      });
  }

  retryCheckIframeUrl() {
    setTimeout(() => {
      this.checkIframeUrl();
    }, this.retryInterval);
  }

  return() {
    this.router.navigateByUrl('/home');
  }

  submit() {
    this.router.navigateByUrl('/');
  }

}
