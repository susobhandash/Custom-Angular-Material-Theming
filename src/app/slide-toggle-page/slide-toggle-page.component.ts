import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-slide-toggle-page',
  templateUrl: './slide-toggle-page.component.html',
  styleUrls: ['./slide-toggle-page.component.scss'],
})
export class SlideTogglePageComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
