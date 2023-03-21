import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleUtilityService {
  progressBarValue: string | number = 100;
  isHeaderVisible: boolean = true;

  constructor() {}

  setHeaderVisibility(isVisible: boolean): void {
    this.isHeaderVisible = isVisible;
  }

  setProgress(progressValue: number | string = 0): void {
    this.progressBarValue = progressValue;
  }
}
