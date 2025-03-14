import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home-pso',
  templateUrl: './home-pso.component.html',
  styleUrls: ['./home-pso.component.scss']
})
export class HomePsoComponent {

  returnHome() {
    this.router.navigateByUrl('/');
  }
  selectedFile: File | null = null;
  selectedAlgorithm: string | null = null;
  fileUploaded: boolean = false;
  formValid: boolean = false;

  constructor(
    private router: Router,
  ) {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.fileUploaded = true;
      this.checkFormValidity();
    }
  }

  checkFormValidity() {
    this.formValid = this.fileUploaded && this.selectedAlgorithm !== null;
  }

  processFile() {
    if (this.formValid && this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const fileContent = e.target?.result as string;
        const jsonData = JSON.parse(fileContent);

        if (this.selectedAlgorithm === 'algorithm1') {
          this.runAlgorithm1(jsonData);
        } else if (this.selectedAlgorithm === 'algorithm2') {
          this.runAlgorithm2(jsonData);
        }
      };
      fileReader.readAsText(this.selectedFile);
    } else {
      alert('Please upload a file and select an algorithm.');
    }
    this.router.navigateByUrl('/solution-pso');
  }

  runAlgorithm1(data: any) {
    // Implémenter l'algorithme 1 ici
    console.log('Running Algorithm 1 with data:', data);
  }

  runAlgorithm2(data: any) {
    // Implémenter l'algorithme 2 ici
    console.log('Running Algorithm 2 with data:', data);
  }
}

@NgModule({
  declarations: [HomePsoComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [HomePsoComponent]
})
export class HomePsoModule { }

platformBrowserDynamic().bootstrapModule(HomePsoModule);
