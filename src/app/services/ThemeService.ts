import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public activeThemeMode: ThemeModes = ThemeModes.Light;
  public activeTheme: ThemePaletts = ThemePaletts.PurpleGreen;

  switchTheme() {
    const body = document.querySelector('body');
    if (body) {
      body.className = '';
      body.classList.add(this.activeTheme);
      body.classList.add(this.activeThemeMode);
    }

    localStorage.setItem('activeThemeMode', this.activeThemeMode);
    localStorage.setItem('activeTheme', this.activeTheme);

    setTimeout(() => {
      const elem = document.querySelector(':root');
      let cs = elem ? getComputedStyle(elem) : null;
      if (cs) {
        const themeColor = cs.getPropertyValue('--primary');
        const themeMeta = this.document.getElementById(
          'theme-color'
        ) as HTMLMetaElement;

        if (themeMeta) {
          themeMeta.content = themeColor;
        }
      }
    }, 500);
  }

  toggleTheme(theme: ThemePaletts) {
    this.activeTheme = theme;

    this.switchTheme();
  }

  toggleThemeMode(): void {
    if (this.activeThemeMode === ThemeModes.Light) {
      this.activeThemeMode = ThemeModes.Dark;
    } else {
      this.activeThemeMode = ThemeModes.Light;
    }

    this.switchTheme();
  }
}
