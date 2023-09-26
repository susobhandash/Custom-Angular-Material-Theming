import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.scss'],
})
export class ProgressSpinnerPageComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
