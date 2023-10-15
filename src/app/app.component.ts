import { Component } from '@angular/core';
import {
  ThemeModes,
  ThemeOptions,
  ThemePaletts,
  ThemeService,
} from './services/ThemeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Material Theming';
  // themePalette = ThemePaletts;
  themeOptions: ThemeOptions[] = [
    { text: '(M) Purple Green', value: ThemePaletts.PurpleGreen },
    { text: '(M) Pink Blue Grey', value: ThemePaletts.PinkBlueGrey },
    { text: '(M) Indigo Pink', value: ThemePaletts.IndigoPink },
    {
      text: '(M) Deep Purple Amber',
      value: ThemePaletts.DeepPurpleAmber,
    },
    { text: '(C) Teal Lime', value: ThemePaletts.TealLime },
    { text: '(C) Deep Orange Brown', value: ThemePaletts.DeepOrangeBrown },
    { text: '(C) Blue Green', value: ThemePaletts.BlueGreen },
    { text: '(C) Maroon Cream', value: ThemePaletts.MaroonCream },
    {
      text: '(C) Dark Teal Light Green',
      value: ThemePaletts.DarkTealLightGreen,
    },
  ];
  activeTab = 0;

  constructor(public themeService: ThemeService) {
    const themeMode = localStorage.getItem('activeThemeMode') as ThemeModes;
    this.themeService.activeThemeMode = themeMode
      ? themeMode
      : ThemeModes.Light;

    const theme = localStorage.getItem('activeTheme') as ThemePaletts;
    this.themeService.activeTheme = theme ? theme : ThemePaletts.PurpleGreen;

    this.themeService.toggleTheme(this.themeService.activeTheme);
  }
}
