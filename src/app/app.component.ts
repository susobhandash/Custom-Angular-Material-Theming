import { Component } from '@angular/core';

export enum ThemeModes {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

export enum ThemePaletts {
  PurpleGreen = 'purple-green',
  PinkBlueGrey = 'pink-blue-grey',
  IndigoPink = 'indigo-pink',
  DeepPurpleAmber = 'deep-purple-amber',
  TealLime = 'teal-lime',
  DeepOrangeBrown = 'deep-orange-brown',
  BlueGreen = 'blue-green',
  MaroonCream = 'maroon-cream',
  DarkTealLightGreen = 'dark-teal-light-green',
}

export interface ThemeOptions {
  text: string;
  value: ThemePaletts;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Material Theming';
  themeMode: ThemeModes = ThemeModes.Light;
  activeTheme: ThemePaletts = ThemePaletts.PurpleGreen;
  themePalette = ThemePaletts;
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

  constructor() {
    this.toggleTheme(this.activeTheme);
  }

  toggleTheme(theme: ThemePaletts) {
    this.activeTheme = theme;

    this.themeOptions.forEach((option) => {
      document.querySelector('body')?.classList.remove(option.value);
    });

    document.querySelector('body')?.classList.add(this.activeTheme);
  }

  toggleThemeMode(): void {
    if (this.themeMode === ThemeModes.Light) {
      this.themeMode = ThemeModes.Dark;
    } else {
      this.themeMode = ThemeModes.Light;
    }

    document.querySelector('body')?.classList.remove(ThemeModes.Dark);
    document.querySelector('body')?.classList.remove(ThemeModes.Light);

    document.querySelector('body')?.classList.add(this.themeMode);
  }
}
