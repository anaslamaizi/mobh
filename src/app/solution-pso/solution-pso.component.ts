import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from "../spinner/spinner.component";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-solution-pso',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    SpinnerComponent
],
  templateUrl: './solution-pso.component.html',
  styleUrls: ['./solution-pso.component.scss']
})
export class SolutionPsoComponent implements OnInit {
  distance:any;
  time:any;
  loading:boolean=false;

  constructor(private router: Router, private http: HttpClient, public dataService: DataService) {}

  ngOnInit() {
   
  }


  return() {
    this.router.navigateByUrl('/home-pso');
  }


  displaySolution(){
    this.router.navigateByUrl('/result-pso');
  }

}
