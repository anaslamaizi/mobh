import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResultPsoComponent } from './result-pso/result-pso.component';
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
  declarations: [
    ResultPsoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    SpinnerComponent
],
  providers: []
})
export class AppModule { }
