import { Component, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-section-algorithms',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './home-section-algorithms.component.html',
  styleUrls: ['./home-section-algorithms.component.scss']
})
export class HomeSectionAlgorithmsComponent {

  @Input() algorithm: FormGroup = this.fb.group({});
  listOfAlgorithms: any = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {}

}
