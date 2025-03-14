import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { ResultsComponent } from './results/results.component';
import { HomePsoComponent } from './home-pso/home-pso.component';;
import { ResultPsoComponent } from './result-pso/result-pso.component';
import { HomeChoiceComponent } from './home-choice/home-choice.component';
import { SolutionPsoComponent } from './solution-pso/solution-pso.component';
;

export const routes: Routes = [
    { path: '', component: HomeChoiceComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'preview', component: PreviewComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'home-pso', component: HomePsoComponent },
    { path: 'result-pso', component: ResultPsoComponent },
    { path: 'solution-pso', component: SolutionPsoComponent },
    
];
